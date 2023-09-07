<script setup>
  import {ref} from "vue";
  import DataShow from "@/components/data/DataShow.vue";

  const title = ref("数据表")
</script>

<template>
    <h1>
      {{ title }}
    </h1>
    <DataShow/>
</template>

<style scoped>

</style>