import {IAction} from "@/store/actions";
import {IIndexable} from "@/types";

export default interface IUserActions extends IAction {
  loginAsync: (context: IIndexable)=> void;
  logoutAsync: (context: IIndexable)=> void;
  startLoader: (context: IIndexable)=> void;
  stopLoader: (context: IIndexable)=> void;
}
