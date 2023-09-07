<script setup>
import {ref} from 'vue'

const message = ref('')
const value = ref('')
const checked = ref(false)
const hobbies = ref([])
let sex = ref('0')

const options = ref([
  {value: '陕西省', label: '陕西省'},
  {value: '四川省', label: '四川省'},
  {value: '上海市', label: '上海市'},
])

const age = ref(0)
</script>

<template>
  <h1>
    表单
  </h1>
  <div>
    <p>输入的内容: {{ message }} </p>
    <a-input v-model:value="message" placeholder="请输入"/>
  </div>
  <div>
    <span>多行文本内容：</span>
    <p class="pre"> {{ value }} </p>
    <a-textarea v-model:value="value"/>
  </div>
  <div>
    <a-checkbox id="checkbox" v-model:checked="checked"> check</a-checkbox>
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <a-checkbox-group v-model:value="hobbies">
      <a-row>
        <a-checkbox value="FootBall">FootBall</a-checkbox>
        <a-checkbox value="BasketBall">BasketBall</a-checkbox>
        <a-checkbox value="Swim">Swim</a-checkbox>
      </a-row>
    </a-checkbox-group>
    <a-row>
      <label id="hobbies" for="hobbies">选项: {{ hobbies }} </label>
    </a-row>
  </div>
  <div>
    <!-- 默认0 女-->
    <a-radio-group v-model:value="sex" name="sexRadioGroup" on-change="viewSex">
      <a-radio value="1">男</a-radio>
      <a-radio value="0">女</a-radio>
    </a-radio-group>
    <a-row>
      <label :id="sex" for="sex">性别: {{ sex === '0' ? '女':'男' }} </label>
    </a-row>
  </div>

  <div>
    <a-select class="prove" v-model:value="options.value" :options="options" placeholder="请选择省份"/>
    <a-row>
      <label :id="options" for="options"> 您所在的省份: {{options.value}} </label>
    </a-row>
  </div>

  <div>
    <a-input v-model.number="age"/>
  </div>
</template>

<style scoped>
.pre {
  white-space: pre-line;
  height: 50px;
  width: 100px;
}

.prove {
  width: 200px;
}
</style>