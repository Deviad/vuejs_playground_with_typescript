import {IUserActions, userActionTypes} from "@/store/actions";

export default {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(userActionTypes.increment)
    }, 0)
  }
} as IUserActions;
