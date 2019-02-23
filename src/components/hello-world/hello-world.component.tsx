import {Component, Emit, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';

import './hello-world.component.scss';
import WithRender from './hello-world.component.html';
import classnames from 'classnames';
import {mapActions, mapGetters} from "vuex";

@WithRender
@Component(
  {
    methods: {
      ...mapActions({
        doIncrement: 'incrementAsync', // map `this.increment()` to `this.$store.dispatch('increment')`
        // `mapActions` also supports payloads:
        // 'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
      })
    },
    computed: {
      ...mapGetters({
        // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        getIncrement: 'increment'
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

