import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";
import {userModule} from "@/store/modules";
import {IRootState} from "@/store/states/IRootState";

Vue.use(Vuex);


const store: StoreOptions<IRootState> = {

  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    userModule
  }
};

export default new Vuex.Store(store);
