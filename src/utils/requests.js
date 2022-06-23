import axios from "axios";
import BASE_URL from './url'

/**
 * Set token for auth
 * @param {string} token 
 */
const setTokenService = async (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log('axios.default.headers', axios.defaults.headers)
};
const setNullTokenService = () => {
  axios.defaults.headers.common["Authorization"] = `${null}`;
};

const getAuthorization = async () => {
  return axios.defaults.headers.common["Authorization"]
}

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
let token = localStorage.getItem('user_token');
const createAxios = (endpoint) =>
  axios.create({
    baseURL: `${BASE_URL}/${endpoint}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": token != undefined ? `Bearer ${token}` : null
    },
    validateStatus(status) {
      return status === 200;
    },
  });


// route => base_url/users
let login = createAxios('auth');
let register = createAxios('auth');
let getUsers = createAxios('user');
let sendContact = createAxios('');
let getUserForms = createAxios('form')
const axiosRequests = [getUsers];

for (const element of axiosRequests) {
  element.interceptors.response.use(myInterceptorSuccess, myInterceptorError);
}

const ApiService = {
  login: login,
  register: register,
  getUsers: getUsers,
  sendContact: sendContact,
  getUserForms: getUserForms
};

export { setTokenService, setNullTokenService, getAuthorization };
export default ApiService;
