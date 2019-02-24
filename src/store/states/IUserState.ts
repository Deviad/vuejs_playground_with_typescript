import {IState} from "@/store/states";

export default interface IUserState extends IState {
  isLogged: boolean;
  isLoginLoading: boolean;
}
