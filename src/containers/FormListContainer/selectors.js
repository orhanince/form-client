import {createSelector} from 'reselect';

const userFormListDomain = () => state => state.forms;

const makeUserFormListDomain = () =>
  createSelector(
      userFormListDomain(),
    substate => substate.toJS(),
  );

export default makeUserFormListDomain;
