<template>
  <div>
    <label for="email">{{ title }}:</label>
    <input
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('inputValue', { name: name, value: ($event.target as HTMLInputElement).value })"
      required
    />
  </div>
</template>


                         
<script setup lang="ts">
type InputType = "text" | "number" | "email" | "password";
const props = defineProps({
  type: {
    type: String as () => InputType,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: "",
  },
});

const emits = defineEmits(["inputValue"]);
</script>



