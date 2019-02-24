import {IAction} from "@/store/actions";
import {IContext} from "@/store/actions";

export default interface IUserActions extends IAction {
  loginAsync: (context: IContext)=> void;
  logoutAsync: (context: IContext)=> void;
  startLoader: (context: IContext)=> void;
  stopLoader: (context: IContext)=> void;
}
