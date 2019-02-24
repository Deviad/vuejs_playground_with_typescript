import {IUserActions, userMutationTypes} from "@/store/actions";

const userActions: IUserActions = {
  startLoader ({ commit }) {
    commit(userMutationTypes.startLoader);
  },
  stopLoader ({ commit }) {
    commit(userMutationTypes.stopLoader);
  },
  loginAsync ({ commit,dispatch }) {
    dispatch('startLoader');
    setTimeout(() => {
      commit(userMutationTypes.login);
      dispatch('stopLoader');
    }, 1000)
  },
  logoutAsync ({ commit, dispatch }) {
    dispatch('startLoader');
    setTimeout(() => {
      commit(userMutationTypes.logout);
      dispatch('stopLoader');
    }, 1000);
  }
};

export default userActions;
