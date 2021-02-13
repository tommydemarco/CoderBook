import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./code.types";

import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInFailure,
  emailSignInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./code.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

function* googleSignInAsync() {
  try {
    const { code } = yield auth.signInWithPopup(googleProvider);
    const codeRef = yield call(createUserProfileDocument, code);
    const codeSnapshot = yield codeRef.get();
    yield put(
      googleSignInSuccess({
        currentUser: codeSnapshot.id,
        // ...codeSnapshot.data,
      })
    );
  } catch (error) {
    put(googleSignInFailure(error.message || "There was an error"));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { code } = yield auth.signInWithEmailAndPassword(email, password);
    const codeRef = yield call(createUserProfileDocument, code);
    const codeSnapshot = yield codeRef.get();
    yield put(
      emailSignInSuccess({
        currentUser: codeSnapshot.id,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      emailSignInFailure(
        error.message || "There was an error in the email sign in"
      )
    );
  }
}

export function* isUserSignedIn() {
  yield takeLatest(UserActionTypes.IS_CODE_SIGNED_IN, checkUserSignedIn);
}

export function* checkUserSignedIn() {
  yield console.log("The check code sign in generator was called successfully");
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, onSignOutAsync);
}

export function* onSignOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export default function* codeSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserSignedIn),
    call(onSignOut),
  ]);
}
