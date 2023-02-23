import { RootState } from '@/redux/store';

const selectAuth = (state: RootState) => state.auth;

export const selectIsLoggedIn = (state: RootState) =>
  selectAuth(state).userName !== null;
export const selectUserName = (state: RootState) => selectAuth(state).userName;
export const selectAuthStatus = (state: RootState) => selectAuth(state).status;
export const selectAuthIsLoading = (state: RootState) =>
  selectAuth(state).status === 'pending';
export const selectAuthError = (state: RootState) => selectAuth(state).error;
