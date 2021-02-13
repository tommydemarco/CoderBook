import { createSelector } from "reselect";

const selectUser = (state) => state.code;

export const selectCurrentUser = createSelector([selectUser], (code) => {
  return code.currentUser;
});
