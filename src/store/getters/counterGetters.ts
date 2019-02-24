import {ICounterGetters} from "@/store/getters";
import {ICounterState} from "@/store/states";

const counterGetters: ICounterGetters = {
  increment (state:ICounterState) {
    return state.count;
  }
};

export default counterGetters;
