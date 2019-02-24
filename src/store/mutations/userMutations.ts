import IUserMutations from "@/store/mutations/IUserMutations";
import {IUserState} from "@/store/states";

const userMutations: IUserMutations = {

  login (state: IUserState) {
    state.isLogged = true;
  },
  logout(state: IUserState) {
    state.isLogged = false;
  },
  startLoader(state: IUserState) {
    state.isLoginLoading = true;
  },
  stopLoader(state: IUserState) {
    state.isLoginLoading = false;
  }

};

export default userMutations;
