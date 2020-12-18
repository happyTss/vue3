<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <hr />
  <!-- <Test msg="Hello Vue 3.0 + Vite" />
  <Life/> -->
  <router-link to="/demo1">demo1</router-link>
  <router-link to="/demo2">demo2</router-link>
  <router-link to="/demo3">demo3</router-link>
  <router-link to="/demo4">demo4</router-link>
  <router-link to="/demo5">demo5</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import Life from "./components/Life.vue";
// import { useRouter ,useRoute} from 'vue-router'//页面路由必须引入,否则无法使用
import {ref, onBeforeMount,onMounted, onBeforeUpdate,onUpdated, onBeforeUnmount,onUnmounted } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
    Life,
  },
    data() {
    return {
      num: 1,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.id = 3;
    }, 4000);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {},
  unmounted() {
    console.log("unmounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  setup() {
    const id = ref(1);
/*    
    const router = useRouter()
    const route = useRoute()
    const toHome = (() => {
    router.push({
      name: 'home'
    })
  }) 
*/
    console.log("setup");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted!");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
  },

};
</script>
