import IUserMutations from "@/store/mutations/ICounterMutations";
import {ICounterState} from "@/store/states";

export default {

  increment (state: ICounterState) {
    state.count++
  }

} as IUserMutations;
