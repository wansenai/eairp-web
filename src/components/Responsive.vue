<script setup>
import {ref, shallowRef, nextTick, reactive} from 'vue';

  const count = ref(0);

  function increment() {
    console.log(count); // { value: 0 }
    console.log(count.value); // 0

    count.value++;
    console.log(count.value); // 1
  }

  const obj = ref({
      key_one: {count},
      key_two: ['abc', 'def']
  })

  function mutateDeeply() {
    obj.value.key_one ++
    obj.value.key_two.push('ghl')
  }

  const big_data = shallowRef({
    value: ['abc', count, ['dfh', ['cgi',['ugv']]]]
  })

  async function update(){
    mutateDeeply()
    big_data.value.value.push('dhf')
    count.value--
    await nextTick()
  }

  const state = reactive({ number: 0 })

  /**
    * 代理对象
    * 但是reactive有局限性，它只能适用于（对象、数组、Map Set这样），它不能持有如string number boolean这样的原始数据类型
    * 不能替换整个对象，因为vue响应式跟踪是通过属性访问，因此必须始终保持对响应式对象的相同引用
    * 解构操作不友好
    *
    * 综合推荐使用ref
    */
  const raw = {}
  const proxy = reactive(raw)
  // 代理对象不等于它本身原对象
  console.log(raw === proxy)
  // 同一对象上调用reactive会返回它相同的代理对象
  console.log(reactive(raw) === proxy)
  // 在一个代理上调用reactive会返回它自己
  console.log(reactive(proxy) === proxy)

  let a = reactive({ key: 0 })
  a = reactive({key:1})

  /**
    * ref会在作为响应对象的属性被访问或修改的时候自动解包
    * 如果将一个新的ref赋值给一个关联了已有ref的属性，那么它会替换掉旧的ref
    * 深层响应式对象才会ref解包，浅层对象不会ref解包
    * 和reactive不同的是 当ref作为响应数组和原生集合类型，map等不会被解包
    */
  const number = ref(0)
  const status = reactive({
    number
  })
  console.log(status.number)
  status.number = 1
  console.log(number.value)

  const number_two = ref(9)
  status.number = number_two
  console.log(status.number)

  console.log(number.value)

  const values = reactive([ref('Vue 3')])
  console.log(values[0].value)

  const map = reactive(new Map([['count', ref('James')]]))
  console.log(map.get('count').value)

  /**
    * 模板中只有顶级属性才能解包
    */
  const key_one = ref(1)
  const object = { key_two: ref(2) }

  const { key_two } = object
</script>

<template>
  <div class="test-button">
    <a-button type="dashed" danger @click="increment">{{ count }}</a-button>
    <a-button type="primary" @click="update">{{ count }}</a-button>
    <a-button @click="state.number++"> {{ state.number }}</a-button>

    <div>
      {{ key_one + 5}}
    </div>

    <div>
      {{ key_two + 1 }}
    </div>

  </div>
</template>

<style scoped>
</style>