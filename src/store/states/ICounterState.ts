import {IState} from "@/store/states";

export default interface ICounterState extends IState {
  count: number;
}
