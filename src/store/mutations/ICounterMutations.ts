import {IMutation} from "@/store/mutations";

export default interface ICounterMutations extends IMutation {
  increment: ()=> void;
}
