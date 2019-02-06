import {Component, Prop} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';
import './app.scss';

@Component
export default class App extends Vue {

  public render() {

    return (
      <div id='app'>
        <div id='nav'>
          <router-link to='/'>Home</router-link> |
          <router-link to='/about'>About</router-link>
        </div>
        <router-view/>
      </div>
    );
  }
}

