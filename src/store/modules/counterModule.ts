import {counterState} from "@/store/states";
import {IModule} from "@/store/modules";
import {counterGetters} from "@/store/getters";
import {counterMutations} from "@/store/mutations";
import {counterActions} from "@/store/actions";

export default {
  namespaced: true,
  state: counterState,
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
} as IModule;
