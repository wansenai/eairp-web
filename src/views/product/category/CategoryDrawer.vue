<template>
  <BasicDrawer
      v-bind="$attrs"
      @register="registerDrawer"
      showFooter
      :title="getTitle"
      width="50%"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue';
import { BasicForm, useForm } from '/@/components/Form/index';
import { CategorySchema } from './category.data';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

export default defineComponent({
  name: 'CategoryDrawer',
  components: { BasicDrawer, BasicForm },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const menuId = ref<number>(0);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      schemas: CategorySchema,
      showActionButtonGroup: false,
      baseColProps: { lg: 12, md: 24 },
    });

    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data,
        });
      }
      if ('record' in data) {
        menuId.value = data.id;
      }
    });

    const getTitle = computed(() => (!unref(isUpdate) ? '新增产品分类' : '编辑产品分类'));

    return { registerDrawer, registerForm, getTitle };
  },
});
</script>