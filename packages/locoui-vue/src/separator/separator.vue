<template>
  <separator-root
    :decorative="decorative"
    :orientation="orientation"
    :class="separatorClass"
    v-bind="$attrs"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import * as SeparatorPrimitive from "@radix-ui/vue-separator";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  orientation: {
    type: String,
    default: "horizontal",
  },
  decorative: {
    type: Boolean,
    default: true,
  },
});

const separatorClass = computed(() => [
  "shrink-0 bg-border",
  props.orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
  props.className,
]);
</script>

<script>
export default {
  name: "Separator",
};
</script>
