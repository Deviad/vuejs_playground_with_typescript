import IUserMutations from "@/store/mutations/IUserMutations";
import {IUserState} from "@/store/states";

export default {

  increment (state: IUserState) {
    state.count++
  }

} as IUserMutations;
