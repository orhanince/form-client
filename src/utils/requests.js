import axios from "axios";
import BASE_URL from './url'

/**
 * Set token for auth
 * @param {string} token 
 */
const setTokenService = (token) => {
  axios.defaults.headers.common["Authorization"] = `${token}`;
};
const setNullTokenService = () => {
  axios.defaults.headers.common["Authorization"] = `${null}`;
};

/**
 * Define return data from the api
 * @param {object} response 
 */
const myInterceptorSuccess = function (response) {
  if (response.status === 200 && response.data) {
    if (response.data === true && response.data.status === 200) {
      return response.data.data;
    } else {
      throw response.data;
    }
  }
};

const myInterceptorError = function (err) {
  console.log(err);
  if (!err.response) {
    const errorMessage = { message: "Network Error!" };
    throw errorMessage;
  }

  if (err.response.status === 401) {
  }
  return false;
};

const createAxios = (endpoint) =>
  axios.create({
    baseURL: `${BASE_URL}/${endpoint}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus(status) {
      return status === 200;
    },
  });

// route => base_url/users
let login = createAxios('auth');
let register = createAxios('auth');
let getUsers = createAxios("user");
let sendContact = createAxios("");

const axiosRequests = [getUsers];

for (const element of axiosRequests) {
  element.interceptors.response.use(myInterceptorSuccess, myInterceptorError);
}

const ApiService = {
  login: login,
  register: register,
  getUsers: getUsers,
  sendContact: sendContact
};

export { setTokenService, setNullTokenService };
export default ApiService;
