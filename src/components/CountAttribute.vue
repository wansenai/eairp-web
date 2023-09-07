<script setup>
import {computed, reactive, ref} from "vue";

  const object = reactive({
    name : 'James',
    games: [
        'Dota 2',
        'WoW',
        'Tencent CF'
    ]
  })

  const result = computed(() => {
    return object.games.length > 0 ? 'Yes' : 'No'
  })

  const firstName = ref('James')
  const lastName = ref('Zow')

  let fullName = computed({
    get() {
      return firstName.value + ' ' + lastName.value
    },

    set(newName) {
      [firstName.value, lastName.value] = newName.split(' ')
    }
  })

</script>

<template>
  <p>James是否有游戏库: </p>
  <span> {{result}} </span>

  <p> {{fullName}} </p>
</template>

<style scoped>

</style>