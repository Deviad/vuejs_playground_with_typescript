import {Component} from 'vue-property-decorator';
import Vue from 'vue';
import './app.scss';
import WithRender from './app.component.html';

@WithRender
@Component
export default class App extends Vue {

}

