import {Component, Prop} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';

import './hello-world.scss';
import HelloWorldTemplate from "@/components/HelloWorldTemplate";

@Component
export default class HelloWorld extends Vue {
  @Prop() public msg!: string;

  public render(h: CreateElement): VNode {
    return <HelloWorldTemplate msg={this.msg} />;
  }
}

