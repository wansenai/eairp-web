<script setup>
import {computed, reactive, ref} from "vue";

const isActive = ref(true)
const hasError = ref(false)

const classObject = reactive({
  active: true,
  'text-danger': false
})

const error = ref(null)
const computedClassObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

const activeClass = ref('active')
const awesome = ref(true)

const type = ref('A')
const ok =ref(true)
</script>

<template>
  <div :class="{ active: isActive}"></div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError}"></div>
  <div class="static active"></div>

  <div :class="classObject"></div>

  <div :class="computedClassObject"></div>

  <!-- 绑定数组类型的class属性 -->
  <div :class="[isActive, classObject]"></div>

  <!-- 条件渲染class -->
  <div :class="[isActive ? activeClass: '', error]"></div>

  <div>
    <a-button type="primary" @click="awesome = !awesome">条件</a-button>
    <h1 v-if="awesome">Vue Class Style And If</h1>
    <h1 v-else>😢</h1>
  </div>

  <div :class="iframe">
    <a-button type="primary" @click="type = 'C'">等于C</a-button>
    <div v-if="type === 'A'">
      <h3>A</h3>
    </div>
    <div v-else-if="type === 'B'">
      <h3>B</h3>
    </div>
    <div v-else-if="type === 'C'">
      <h3>C</h3>
    </div>
    <div v-else>
      <h3>Not A/B/C</h3>
    </div>
  </div>
  <!-- v-show 和 v-if 基本用法一样，只不过v-show会在DOM元素进行保留，它不支持在template上使用也不能配合v-else使用
  v-if有更高的切换开销，v-show有更高的初始化渲染开销，如果需要频繁切换最好使用v-show-->
  <div>
    <h3 v-show="ok">Hello VShow</h3>
  </div>
</template>

<style scoped>
</style>