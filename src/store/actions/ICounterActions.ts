import {IAction} from "@/store/actions";
import {IIndexable} from "@/types";

export default interface IUserActions extends IAction {
  incrementAsync: (context: IIndexable)=> void;
}
