//===> ALL: allows to "boot up" all the necessary sagas at the same time
//          takes an array of sagas (preferably called with the call function)
import { all, call } from "./code/node_modules/redux-saga/effects";

import codeSaga from "./code/code.sagas";

export default function* rootSaga() {
  yield all([call(codeSaga)]);
}
