<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm"/>
  </BasicModal>
</template>
<script lang="ts">

import {defineComponent, ref, computed, unref} from 'vue';
import {BasicModal, useModalInner} from '/@/components/Modal';
import {BasicForm, useForm} from '/@/components/Form/index';
import {formSchema} from "@/views/product/units/units.data";
import {AddOrUpdateProductUnitReq} from "@/api/product/model/productUnitModal";
import {addOrUpdateUnit} from "@/api/product/productUnit";

export default defineComponent({
  name: 'UnitModal',
  components: {BasicModal, BasicForm},
  emits: ['success', 'register'],
  setup(_, {emit}) {
    const rowId = ref('');
    const isUpdate = ref(true);
    const getTitle = computed(() => (!unref(isUpdate) ? '新增商品计量单位' : '编辑商品计量单位'));

    const [registerForm, {setFieldsValue, resetFields, validate}] = useForm({
      labelWidth: 100,
      baseColProps: {span: 24},
      schemas: formSchema,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23,
      },
    });

    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
      resetFields();
      setModalProps({confirmLoading: false, destroyOnClose: true});
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        rowId.value = data.record.id;
        setFieldsValue({
          ...data.record,
        });
      }
    });

    async function handleSubmit() {
      const values = await validate();
      setModalProps({confirmLoading: true});
      const productUnit: AddOrUpdateProductUnitReq = {
        id : values.id == null ? null : values.id,
        basicUnit: values.basicUnit,
        otherUnit: values.otherUnit,
        otherUnitTwo: values.otherUnitTwo,
        otherUnitThree: values.otherUnitThree,
        ratio: values.ratio,
        ratioTwo: values.ratioTwo,
        ratioThree: values.ratioThree,
        status: values.status,
      }
      const result = await addOrUpdateUnit(productUnit)
      if (result.code === 'P0006' || result.code === 'P0007') {
        closeModal();
        emit('success');
      }
      setModalProps({confirmLoading: false});
    }

    return {
      registerModal,
      registerForm,
      handleSubmit,
      getTitle,
    }
  },
})
</script>