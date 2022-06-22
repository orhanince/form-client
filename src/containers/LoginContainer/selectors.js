import {createSelector} from 'reselect';

const userDomain = () => state => state.user;

const makeUserDomain = () =>
  createSelector(
    userDomain(),
    substate => substate.toJS(),
  );

export default makeUserDomain;
