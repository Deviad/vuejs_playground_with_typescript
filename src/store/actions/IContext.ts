import {AppState} from "@/types";

interface IContext   {

  commit: Function,
  dispatch: Function,
  state: AppState

}

export default IContext;
