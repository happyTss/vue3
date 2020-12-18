<script>
import { h, ref, reactive } from "vue";
export default {
  setup() {
    const count = ref(1);
    const object = reactive({ foo: "bar" });

    return () =>
      h("div", [
        h("p", { style: "color: red" }, count.value),
        h("p", object.foo),
      ]);
  },
};
</script>