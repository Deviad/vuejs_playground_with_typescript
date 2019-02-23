import {IState} from "@/store/states";
import {IMutation} from "@/store/mutations";
import {IAction} from "@/store/actions";
import {IGetter} from "@/store/getters";
import {Module} from "vuex";

export default interface IModule extends Module<any, {}>{
  state: IState
  mutations: IMutation
  actions: IAction
  getters: IGetter
}
