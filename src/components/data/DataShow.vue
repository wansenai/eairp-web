<script setup>
import {reactive, ref} from 'vue'

const items = ref([
  {key: '1', name: 'James', sex: '男', age: '18'},
  {key: '2', name: 'John',  age: '23'},
  {key: '3', name: 'Julia', sex: '女', age: '26'},
  {key: '4', name: 'Cindy', sex: '女', age: '34'},
])

const columns = ref([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
])

const parentParam = ref('Parent')

const books = reactive([
    {
      name: 'red'
    },
    {
      name: 'blue',
      children: [
          {
            name: 'blue-sky'
          }
      ]
    }
])

const objects = reactive({
  title : 'Yi Hua Xin Road',
  phone: '021-1516266',
  admin: 'James'
})

const numbers = ref([
    [1, 2, 3, 7, 8],
    [9, 10, 15, 17, 20]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}

let dataNumber = ref(0)
function sumCount() {
  dataNumber.value++
}

</script>

<script>
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();
function info(value) {
  messageApi.info(value);
};

function warn(event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  messageApi.warn(event)
}
</script>

<template>
  <a-table :dataSource="items" :columns="columns"/>

  <div>
    <li v-for="item in items">
      {{ item.name }}
    </li>

    <li v-for="(item, index) in items">
      {{parentParam}} - {{ index }} - {{ item.sex }}
    </li>

    <li v-for="({age}, index) in items">
      {{ age }} = {{ index }}
    </li>
  </div>

  <!-- 多层for循环 -->
  <div>
    <li v-for="book in books">
      {{ book.name }}
      <span v-for="childItem in book.children">
          {{ childItem.name }}
      </span>
    </li>
  </div>

  <!-- 可遍历key + value -->
  <div>
    <li v-for="(value, key, index) in objects">
        {{ index }} -- {{ key }} -- {{ value }}
    </li>
  </div>

  <div>
    <span v-for="n in 5"> {{ n }} </span>
  </div>

  <div>
    <li v-for="book in books" :key="book.name">
      {{ book.name }}
    </li>
  </div>

  <div>
    <ul v-for="num in numbers">
       <li v-for="result in even(num)"> {{ result }} </li>
    </ul>
  </div>

  <div>
    <a-button type="primary" danger @click="sumCount"> 内联处理器调用方法 </a-button>
    <span> {{dataNumber}} </span>
  </div>

  <div>
    <a-button type="default" @keyup.enter="info('已登录')" @click="info('James Hello')">欢迎</a-button>
  </div>

  <div>
    <a-button type="default" @click="warn('Form cannot be submitted yet.', $event)">警告事件</a-button>
  </div>
  <context-holder />
</template>

<style scoped>

</style>
