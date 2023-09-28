<template>
  <BasicForm @register="registerModal" @ok="handleSubmit">
    <template #menu="{ model, field }">
      <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :fieldNames="{ title: 'menuName', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
      />
    </template>
  </BasicForm>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue';
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import {BasicModal, useModalInner} from "@/components/Modal";
  import {getMenuList} from "@/api/sys/menu";
  import {unref} from "vue/dist/vue";
  const treeData = ref<TreeItem[]>([]);
  export default defineComponent({
    name: 'RolePermissionModal',
    components: {BasicModal, BasicForm},
    emits: ['success', 'register'],
    setup(_, {emit}) {
     const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
       setModalProps({confirmLoading: false});
       const treeData = (await getMenuList()).data
       console.info(treeData)
     });

     async function handleSubmit() {
       setModalProps({confirmLoading: true});
       try {

       } finally {
         emit('success');
         closeModal();
         setModalProps({confirmLoading: false});
       }
     }

      return {registerModal, treeData, handleSubmit };
   },
  })

</script>

<style scoped>

</style>