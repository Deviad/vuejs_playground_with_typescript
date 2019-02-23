import {IState} from "@/store/states";

export interface IRootState extends IState {
  version: string;
}
