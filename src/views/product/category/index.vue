<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增产品分类 </a-button>
        <a-button type="primary" @click="handleBatchDelete"> 批量删除产品分类 </a-button>
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
    <CategoryModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>

<script lang="ts">
import {defineComponent, nextTick} from 'vue';
import {BasicForm} from "@/components/Form";
import {BasicModal, useModal} from "@/components/Modal";
import {BasicTree,} from "@/components/Tree";
import CategoryModal from "@/views/product/category/CategoryModal.vue";
import {BasicTable, TableAction, useTable} from "@/components/Table";
import {getCategoryList} from "@/api/product/productCategory";
import {columns} from "@/views/product/category/category.data";
import MenuDrawer from "@/views/sys/menu/MenuDrawer.vue";
import AccountModal from "@/views/sys/user/AccountModal.vue";

export default defineComponent({
  name: 'ProductCategory',
  components: {
    AccountModal,
    MenuDrawer, BasicTable, TableAction, BasicTree, BasicModal, CategoryModal, BasicForm},
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, expandAll }] = useTable({
      title: '产品分类列表',
      api: getCategoryList,
      columns,
      formConfig: {
        labelWidth: 120,
      },
      isTreeTable: true,
      pagination: false,
      striped: false,
      useSearchForm: false,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      canResize: false,
      actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        fixed: undefined,
      },
    });

    function handleSuccess() {
      reload();
    }

    function onFetchSuccess() {
      nextTick(expandAll);
    }

    async function handleEdit(record: Recordable) {
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    async function handleDelete(record: Recordable) {
    }

    async function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    async function handleBatchDelete() {

    }

    return {
      registerModal,
      registerTable,
      handleEdit,
      handleDelete,
      onFetchSuccess,
      handleSuccess,
      handleCreate,
      handleBatchDelete,
    };
  }
})
</script>