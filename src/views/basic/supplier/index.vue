<template>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增</a-button>
        <a-button type="primary" @click="handleBatchDelete"> 批量删除</a-button>
        <a-button type="primary" @click=""> 启用</a-button>
        <a-button type="primary" @click=""> 禁用</a-button>
        <a-button type="primary" @click=""> 导入</a-button>
        <a-button type="primary" @click=""> 导出</a-button>
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
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {BasicTable, TableAction, useTable} from "@/components/Table";
import {useModal} from "@/components/Modal";
import {useMessage} from "@/hooks/web/useMessage";
import {getSupplierList} from "@/api/basic/supplier";
import {columns, searchFormSchema} from "@/views/basic/supplier/supplier.data";
export default defineComponent({
  name: 'Supplier',
  components: {TableAction, BasicTable},
  setup() {
    const [registerModal, {openModal}] = useModal();
    const { createMessage } = useMessage();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '供应商列表',
      api: getSupplierList,
      rowKey: 'id',
      columns: columns,
      rowSelection: {
        type: 'checkbox',
      },
      formConfig: {
        schemas: searchFormSchema,
        autoSubmitOnEnter: true,
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: true,
      actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        fixed: undefined,
      },
    });

    async function handleCreate() {

    }

    async function handleBatchDelete() {

    }

    async function handleEdit() {

    }

    async function handleDelete() {

    }

    async function handleSuccess() {
      reload();
    }

    return { registerTable, registerModal, handleCreate, handleDelete, handleBatchDelete, handleEdit, handleSuccess }
  }
})
</script>