<script setup>

</script>

<template>
  <span>Message: {{ msg }}</span>

  <p>使用文本添加: {{rawHtml}}</p>
  <p>使用v-html熟悉插入html: <span v-html="rawHtml"></span></p>

  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId"></div>

  <a-button type="primary" :disabled="isButtonDisabled">Button</a-button>

  <div v-bind="objectArrays"></div>

<!--  <time :title="toTitleDate(date)" :datetime="date">-->
<!--    {{ formatDate(date) }}-->
<!--  </time>-->
  <a :href="url"></a>
  <p v-if="seen">Now you see me</p>

  <a @click="toDo"></a>

  <a :[attributename]="url"></a>

  <a @[attributename]="toDo"></a>
</template>

<script>
  const objectArrays = {
    id: 'ids',
    class: 'wrapper',
  }
  export default {
    data() {
      return {
        msg: 'James Zow',
        rawHtml: '<span style="color: red">红色Span标签</span>',
      }
    }
  }
</script>

<style scoped>

</style>