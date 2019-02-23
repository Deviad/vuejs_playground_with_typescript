import {userState} from "@/store/states";
import {IModule} from "@/store/modules";
import {userActions} from "@/store/actions";
import userMutations from "@/store/mutations/userMutations";
import {userGetters} from "@/store/getters";

export default {
  namespaced: true,
  state: userState,
  mutations: userMutations,
  actions: userActions,
  getters: userGetters
} as IModule;
