<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>
      <button @click="setActive">Click me</button>
    </div>
    <hello-world
      msg="Welcome to Your Vue.js + TypeScript App"
      :active="active"
      :setActive="setActive"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorldComponent from "@/components/hello-world/hello-world.component"; // @ is an alias to /src
@Component({
  components: {
    "hello-world": HelloWorldComponent
  }
})
export default class Home extends Vue {
  active = false;

  setActive() {
    console.log("setActive");
    this.active = !this.active;
  }
}
</script>
