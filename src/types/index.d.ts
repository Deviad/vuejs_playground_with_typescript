import {ICounterState, IUserState} from "@/store/states";

export declare interface IIndexable {
  [key: string]: any;
  [key: number]: any;
}


export type AppState = IUserState | ICounterState;
