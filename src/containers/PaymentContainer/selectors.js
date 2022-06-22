import {createSelector} from 'reselect';

const loadingDomain = () => state => state.loading;

const makeLoadingDomain = () =>
  createSelector(
    loadingDomain(),
    substate => substate.toJS(),
  );

export default makeLoadingDomain;
