<template>
  <div>
    <button @click="$emit('onClick')">{{ value }}</button>
    <!--
    <input type="submit" value="送信" />
    -->
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

<!--
<style lang='scss' scoped>
header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $light-gray;
  background: white;
}
.logo-area {
  img {
    width: 32px;
    height: auto;
  }
}
.nav-area {
  margin-left: auto;
  margin-right: 40px;
  &-list {
    display: flex;
    gap: 20px;
  }
  a {
    font-weight: bold;
    font-size: 14px;
  }
}
</style>


<style lang="scss" scoped>
button {
  background-color: blue;
  color: white;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
}
</style>

-->

<style lang="scss" scoped>
button {
  background-color: white;
  color: black;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
}
</style>
