<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增</a-button>
        <a-button type="primary" @click="handleBatchDelete"> 批量删除</a-button>
        <a-button type="primary" @click="handleOnStatus(0)"> 批量启用</a-button>
        <a-button type="primary" @click="handleOnStatus(1)"> 批量禁用</a-button>
        <a-button type="primary" @click=""> 导入</a-button>
        <a-button type="primary" @click=""> 导出</a-button>
        <a-button type="primary" @click=""> 批量编辑</a-button>
        <a-button type="primary" @click=""> 修正库存</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
              :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ProductInfoModal ref="productModalRef" @cancel="handleCancel" @success="handleOk"/>
  </div>
</template>
<div>
</div>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {BasicTable, TableAction, useTable} from "@/components/Table";
import {useMessage} from "@/hooks/web/useMessage";
import {columns, searchFormSchema} from "@/views/product/info/info.data";
import ProductInfoModal from "@/views/product/info/components/ProductInfoModal.vue";
import {getProductInfo} from "@/api/product/product";

export default defineComponent({
  name: 'ProductInfo',
  components: {TableAction, BasicTable, ProductInfoModal },
  setup() {
    const { createMessage } = useMessage();
    const productModalRef = ref(null);
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '商品信息列表',
      rowKey: 'id',
      columns: columns,
      api: getProductInfo,
      rowSelection: {
        type: 'checkbox',
      },
      formConfig: {
        labelWidth: 110,
        schemas: searchFormSchema,
      },
      bordered: true,
      tableSetting: { fullScreen: true },
      useSearchForm: true,
      clickToRowSelect: false,
      showTableSetting: true,
      actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        fixed: undefined,
      },
    });

    function handleCreate() {
      productModalRef.value.openModal()
    }

    async function handleBatchDelete(record: Recordable) {
      const data = getSelectRows();
      if (data.length === 0) {
        createMessage.warn('请选择一条数据');
        return;
      }
    }

    function handleEdit(record: Recordable) {
      productModalRef.value.openModal(record.id)
    }

    async function handleDelete(record: Recordable) {
    }

    async function handleSuccess() {
      reload();
    }

    async function handleOnStatus(newStatus: number) {
      const data = getSelectRows();
      if (data.length === 0) {
        createMessage.warn('请选择一条数据');
        return;
      }
    }

    async function handleCancel() {
      reload();
    }

    async function handleOk() {
      reload();
    }

    return {
      registerTable,
      handleCreate,
      handleDelete,
      handleBatchDelete,
      handleEdit,
      handleSuccess,
      handleOnStatus,
      handleCancel,
      handleOk,
      productModalRef,
    }
  }
})
</script>