import {counterMutationTypes} from "@/store/actions";
import {ICounterActions} from "@/store/actions";

const counterActions: ICounterActions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(counterMutationTypes.increment)
    }, 0)
  }
};

export default counterActions;
