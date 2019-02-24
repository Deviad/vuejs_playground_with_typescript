import {IState, IUserState} from "@/store/states";
import {IRootState} from "@/store/states/IRootState";
import {GetterTree} from "vuex";

export default interface IUserGetters extends GetterTree<IUserState, IRootState>  {
  isLogged: (state: IUserState) => boolean;
  isLoginLoading: (state: IUserState) => boolean;
}
