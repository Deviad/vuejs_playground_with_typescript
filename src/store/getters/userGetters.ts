import {IUserState} from "@/store/states";
import {IUserGetters} from "@/store/getters";

const userGetters: IUserGetters = {
  isLogged (state: IUserState) {
    return state.isLogged;
  },
  isLoginLoading (state: IUserState) {
    return state.isLoginLoading;
  }
};

export default userGetters;
