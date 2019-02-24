import {IRootState} from "@/store/states/IRootState";
import {GetterTree} from "vuex";
import ICounterState from "@/store/states/ICounterState";

export default interface ICounterGetters extends GetterTree<ICounterState, IRootState>  {
  increment: (state: ICounterState) => number;
}
