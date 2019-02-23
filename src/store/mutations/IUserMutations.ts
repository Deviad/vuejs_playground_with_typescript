import {IMutation} from "@/store/mutations/";

export default interface IUserMutations extends IMutation {
  increment: ()=> number;
}
