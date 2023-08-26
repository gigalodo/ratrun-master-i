<template>
  <div>
    <p class="cardTitle">{{ title }}</p>
    <p><img src="@/assets/svg/icon-pintarest.svg" alt="logo" />{{ price }}</p>
    <p>
      <img src="@/assets/svg/icon-pintarest.svg" alt="logo" />{{ contract }}
    </p>
    <p><img src="@/assets/svg/icon-pintarest.svg" alt="logo" />{{ area }}</p>
    <p>
      <img src="@/assets/svg/icon-pintarest.svg" alt="logo" />{{ language }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "タイトルです。" },
  price: { type: String, default: "0" },
  contract: { type: String, default: "no" },
  area: { type: String, default: "no" },
  language: { type: String, default: "no" },
});
</script>

<style scoped>
.cardTitle {
  font-size: 20px;
  font-weight: bold;
}

img {
  height: 20px;
  width: auto;
}

div {
  border: 1px solid black;
  width: 200px;
}
</style>
