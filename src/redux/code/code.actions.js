import { UserActionTypes } from "./code.types";

export const setCurrentUser = (code) => {
  return {
    type: UserActionTypes.SET_CURRENT_CODE,
    payload: code,
  };
};

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const googleSignInSuccess = (code) => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, payload: code };
};

export const googleSignInFailure = (error) => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START, payload: error };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const emailSignInSuccess = (code) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: code,
  };
};

export const emailSignInFailure = (error) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
};

export const isUserSignedIn = () => {
  return {
    type: UserActionTypes.IS_CODE_SIGNED_IN,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: null,
  };
};

export const signOutFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: error,
  };
};
