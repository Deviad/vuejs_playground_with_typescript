import {Component, Emit, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';

import './hello-world.component.scss';
import WithRender from './hello-world-component.html';
import classnames from 'classnames';

@WithRender
@Component
export default class HelloWorldComponent extends Vue {
  @Prop({default: "hello-world"}) className!: string;
  @Prop({default: false}) active!: boolean;
  @Prop({default: ""}) msg!: string;
  @Prop({default: undefined}) setActive!: Function;

  constructor(props: any) {
    super(props);

    console.log("gg this.setActive", this.setActive);
  }

  data = {
    extendedClassName: classnames({
      [this.className]: this.className,
      'hello-world--active': this.active
    })
  };

  @Watch("active")
  onActiveChanged() {
    this.data.extendedClassName = classnames({
      [this.className]: this.className,
      'hello-world--active': this.active
    });
  }
}

