import {IUserGetters} from "@/store/getters";

export default {
  increment (state) {
    return state.count;
  }
} as IUserGetters
