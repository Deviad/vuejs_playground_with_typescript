import {ICounterState, IUserState} from "@/store/states";
import {Vue} from "vue/types/vue";
import {DefaultComputed, DefaultData, DefaultMethods, DefaultProps, PropsDefinition} from "vue/types/options";
import {Observables} from "vue-rx";

export declare interface IIndexable {
  [key: string]: any;
  [key: number]: any;
}

declare module "vue/types/options" {


  interface ComponentOptions<V extends Vue> {
    subscriptions?: Observables | ((this: V) => Observables)
    domStreams?: string[]
    observableMethods?: string[] | Record<string, string>
  }
}
export type AppState = IUserState | ICounterState;
