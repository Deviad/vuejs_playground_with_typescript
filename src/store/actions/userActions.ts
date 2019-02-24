import {IUserActions, userMutationTypes} from "@/store/actions";
import {IUserState} from "@/store/states";

const userActions: IUserActions = {
  startLoader ({ commit }) {
    commit(userMutationTypes.startLoader);
  },
  stopLoader ({ commit }) {
    commit(userMutationTypes.stopLoader);
  },
  loginAsync ({ commit, dispatch, state }) {
    if((state as IUserState).isLogged) {
      return;
    }
    dispatch('startLoader');
    setTimeout(() => {
      commit(userMutationTypes.login);
      dispatch('stopLoader');
    }, 1000)
  },
  logoutAsync ({ commit, dispatch, state }) {
    if(!(state as IUserState).isLogged) {
      return;
    }
    dispatch('startLoader');
    setTimeout(() => {
      commit(userMutationTypes.logout);
      dispatch('stopLoader');
    }, 1000);
  }
};

export default userActions;
