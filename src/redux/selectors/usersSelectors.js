import {createSelector} from "reselect";

const getPersons = state => state.usersPage.persons
export const getPersonsSelector = createSelector( getPersons, users => users.filter( u => true))
export const getCurrentPage = state => state.usersPage.currentPage
export const getItemsCount = state => state.usersPage.itemsCount
export const getTotalPagesCount = state => state.usersPage.totalPagesCount
export const getLoaderStatus = state => state.usersPage.isFetched
export const getFollowedStatus = state => state.usersPage.followedProcess