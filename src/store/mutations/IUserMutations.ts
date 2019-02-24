import {IMutation} from "@/store/mutations/";
import IUserState from "@/store/states/IUserState";

export default interface IUserMutations extends IMutation {

  login: (state: IUserState)=> void;
  logout: (state: IUserState) => void;
  startLoader: (state:  IUserState) => void;
  stopLoader: (state:  IUserState) => void;
}
