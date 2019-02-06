import {VNode} from 'vue';

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.tsx'; // @ is an alias to /src
import logo from "../assets/logo.png";
@Component({
  components: {
    'hello-world': HelloWorld,
  },
})
export default class Home extends Vue {
  public render(): VNode {
    return (
      <div className='home'>
        <img alt='Vue logo' src={logo} />
        <hello-world msg='Welcome to Your Vue.js + TypeScript App'/>
      </div>
    );
  }
}
