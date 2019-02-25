import {Component, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';

import './hello-world.component.scss';
import WithRender from './hello-world.component.html';
import classnames from 'classnames';
import {mapActions, mapGetters} from "vuex";
import {debounce} from 'rxjs/operators';
import {timer} from 'rxjs';

@WithRender
@Component(
  {
    methods: {
      ...mapActions({
        doIncrement: 'counterModule/incrementAsync', // map `this.increment()` to `this.$store.dispatch('increment')`
        // `mapActions` also supports payloads:
        // 'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
        doLogin: 'userModule/loginAsync',
        doLogout: 'userModule/logoutAsync',
        doStartLoader: "userModule/startLoader",
        doStopLoader: "userModule/stopLoader"
      })
    },
    computed: {
      ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        getIncrement: 'counterModule/increment',
        getIsLogged: 'userModule/isLogged',
        getIsLoginLoading: 'userModule/isLoginLoading'
      })
    },
    beforeCreate() {
      const increment$ = this.$fromDOMEvent('#increment', 'click');

      const doubleclicks$ = increment$.pipe(
        debounce(() => timer(350)),
      );

     this.$subscribeTo(doubleclicks$, ()=>{
       this.$store.dispatch('counterModule/incrementAsync');
     })
    }
  }
)
export default class HelloWorldComponent extends Vue {
  @Prop({default: "hello-world"}) className!: string;
  @Prop({default: false}) active!: boolean;
  @Prop({default: ""}) msg!: string;
  @Prop({default: undefined}) setActive!: Function;

  constructor(props: any) {
    super(props);

    console.log("gg this.setActive", this.setActive);
  }

  state = {
    extendedClassName: classnames({
      [this.className]: this.className,
      'hello-world--active': this.active
    })
  };

  @Watch("active")
  onActiveChanged() {
    this.state.extendedClassName = classnames({
      [this.className]: this.className,
      'hello-world--active': this.active
    });
  }
}

