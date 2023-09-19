<template>
  <div>
    <button @click="$emit('onClick')">{{ value }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    default: "text",
  },
  width: { type: String, default: "200px" },
  height: { type: String, default: "50px" },
  borderRadius: { type: String, default: "10px" },
});

const emits = defineEmits(["onClick"]);
</script>

<style lang="scss" scoped>
button {
  background-color: white;
  color: black;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
}
</style>
