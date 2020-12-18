<template>
  <div>
    {{msg}}
    <!-- <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <hr> -->
    <button @click="increment">
      Count is: {{ count }}, double is: {{ double }}
    </button>
    <hr>
    {{count}}
  </div>
</template>

<script>
  import { ref , reactive, computed, toRefs } from 'vue'

  export default {
    props:{
      msg: String

    },
    setup() {
      const count = ref(4)
      const state = reactive({
        count,
        double: computed(() => state.count * 2),
      })

      function increment() {
        state.count++
      }
      
      return {
        state,
        increment,
        count:ref(0),
        ...toRefs(state)
      }
    },
  }
</script>