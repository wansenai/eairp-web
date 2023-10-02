<template>
  <a-row :gutter="10">
    <a-col :md="12" :sm="24">
      <a-card :bordered="false">
        <!-- 按钮操作区域 -->
        <a-row style="margin-left: 14px">
          <a-button @click="" type="primary">添加类别</a-button>
          <a-button title="删除多条数据" @click="" type="default">批量删除</a-button>
          <a-button @click="" type="default" icon="reload">刷新</a-button>
        </a-row>
        <div style="background: #fff;padding-left:16px;height: 100%; margin-top: 5px">
          <a-alert type="info" :showIcon="true">
            <div slot="message">
              当前选择：<span >测试</span>
              <a style="margin-left: 10px" @click="">取消选择</a>
            </div>
          </a-alert>
          <!-- 树-->
          <a-col :md="10" :sm="24">
            <template>
              <a-dropdown :trigger="[this.dropTrigger]" @visibleChange="">
               <span style="user-select: none">
                <a-tree
                    checkable
                    multiple
                    @select=""
                    @check=""
                    @rightClick=""
                    :autoExpandParent="true"
                    @expand=""/>
                </span>
              </a-dropdown>
            </template>
          </a-col>
        </div>
      </a-card>
      <!---- author:os_chengtgen -- date:20190827 --  for:切换父子勾选模式 =======------>
      <div class="drawer-bootom-button">
        <a-dropdown :trigger="['click']" placement="topCenter">
          <a-menu slot="overlay">
            <a-menu-item key="1" >父子关联</a-menu-item>
            <a-menu-item key="2" >取消关联</a-menu-item>
            <a-menu-item key="3" >全部勾选</a-menu-item>
            <a-menu-item key="4" >取消全选</a-menu-item>
            <a-menu-item key="5" >展开所有</a-menu-item>
            <a-menu-item key="6" >合并所有</a-menu-item>
          </a-menu>
          <a-button>
            树操作 <a-icon type="up" />
          </a-button>
        </a-dropdown>
      </div>
    </a-col>
    <a-col :md="12" :sm="24">
      <a-card :bordered="false">
        <a-form >
          <a-form-item  label="名称">
            <a-input placeholder="请输入名称" v-decorator="['name', '' ]"/>
          </a-form-item>
          <a-form-item  label="编号">
            <a-input placeholder="请输入编号" v-decorator="['serialNo', '' ]"/>
          </a-form-item>
          <a-form-item  label="上级目录">
            <a-tree-select style="width:100%" :dropdownStyle="{maxHeight:'200px',overflow:'auto'}"
                           allow-clear :treeDefaultExpandAll="true"
                            v-decorator="[ 'parentId' ]" placeholder="请选择上级目录">
            </a-tree-select>
          </a-form-item>
          <a-form-item  label="排序">
            <a-input v-decorator="[ 'sort' ]"/>
          </a-form-item>
          <a-form-item  label="备注">
            <a-textarea placeholder="请输入备注" :rows="2" v-decorator.trim="[ 'remark' ]" />
          </a-form-item>
        </a-form>
        <div class="anty-form-btn">
          <a-button  type="default" htmlType="button" icon="sync">重置</a-button>
          <a-button  type="primary" htmlType="button" icon="form">保存</a-button>
        </div>
      </a-card>
      <a-card >
        <a-empty>
          <span slot="description"> 请先选择一个类别! </span>
        </a-empty>
      </a-card>
    </a-col>
    <material-category-modal ref="materialCategoryModal" ></material-category-modal>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryModal from "@/views/product/category/CategoryModal.vue";
import {BasicForm} from "@/components/Form";

export default defineComponent({
  name: 'ProductCategory',
  components: { CategoryModal, BasicForm},
  setup() {

  }
})
</script>

<style scoped lang="less">
.ant-card-body .table-operator {
  margin: 15px;
}

.anty-form-btn {
  width: 100%;
  text-align: center;
}

.anty-form-btn button {
  margin: 0 5px;
}

.anty-node-layout .ant-layout-header {
  padding-right: 0
}

.header {
  padding: 0 8px;
}

.header button {
  margin: 0 3px
}

.ant-modal-cust-warp {
  height: 100%
}

.ant-modal-cust-warp .ant-modal-body {
  height: calc(100% - 110px) !important;
  overflow-y: auto
}

.ant-modal-cust-warp .ant-modal-content {
  height: 90% !important;
  overflow-y: hidden
}

#app .desktop {
  height: auto !important;
}

/** Button按钮间距 */
.ant-btn {
  margin-left: 3px
}

.drawer-bootom-button {
  /*position: absolute;*/
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: left;
  left: 0;
  background: #fff;
  border-radius: 0 0 2px 2px;
}
</style>