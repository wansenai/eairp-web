<template>
  <a-modal
      :title="title"
      :width="1300"
      :confirm-loading="confirmLoading"
      v-bind:prefixNo="prefixNo"
      :id="prefixNo"
      switchHelp
      switchFullscreen
      v-model:open="open"
      @cancel="handleCancel"
      style="top:20%;height: 95%;">
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-tabs default-active-key="1" size="small">
          <a-tab-pane key="1" tab="基本信息" id="materialHeadModal" forceRender>
            <a-row class="form-row" :gutter="24">
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="名称" data-step="1" data-title="名称"
                             data-intro="名称必填，可以重复">
                  <a-input placeholder="请输入名称" v-decorator.trim="[ 'name', validatorRules.name ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="规格" data-step="2" data-title="规格"
                             data-intro="规格不必填，比如：10克">
                  <a-input placeholder="请输入规格" v-decorator.trim="[ 'standard', validatorRules.standard ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="型号" data-step="3" data-title="型号"
                             data-intro="型号是比规格更小的属性，比如：RX-01">
                  <a-input placeholder="请输入型号" v-decorator.trim="[ 'model', validatorRules.model ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" label="单位"
                             data-step="4" data-title="单位" data-intro="此处支持单个单位和多单位，勾选多单位就可以切换到多单位的下拉框，多单位需要先在【计量单位】页面进行录入。
                  比如牛奶有瓶和箱两种单位，12瓶=1箱，这就构成了多单位，多单位中有个换算比例">
                  <a-row class="form-row" :gutter="24">
                    <a-col :lg="15" :md="15" :sm="24" style="padding:0px 0px 0px 12px;">
                      <a-input placeholder="输入单位" v-if="!unitChecked"
                               v-decorator.trim="[ 'unit', validatorRules.unit ]" @change="onlyUnitOnChange"/>
                      <a-select :value="unitList" placeholder="选择多单位"
                                v-decorator="[ 'unitId', validatorRules.unitId ]" @change="manyUnitOnChange"
                                showSearch optionFilterProp="children" v-if="unitChecked"
                                :dropdownMatchSelectWidth="false">
                        <div slot="dropdownRender" slot-scope="menu">
                          <v-nodes :vnodes="menu"/>
                          <a-divider style="margin: 4px 0;"/>
                          <div style="padding: 4px 8px; cursor: pointer;"
                               @mousedown="e => e.preventDefault()" @click="addUnit">
                            <a-icon type="plus"/>
                            新增计量单位
                          </div>
                        </div>
                        <a-select-option v-for="(item,index) in unitList"
                                         :key="index" :value="item.id">
                          {{ item.name }}
                        </a-select-option>
                      </a-select>
                    </a-col>
                    <a-col :lg="9" :md="9" :sm="24" style="padding:0px; text-align:center">
                      <a-checkbox :checked="unitChecked" @change="unitOnChange">多单位</a-checkbox>
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="24">
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="颜色" data-step="5" data-title="颜色"
                             data-intro="请填写商品的颜色，如果是多属性商品可以不填（下面有多属性开关）">
                  <a-input placeholder="请输入颜色" v-decorator.trim="[ 'color' ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="基础重量" data-step="6"
                             data-title="基础重量"
                             data-intro="请填写基本单位对应的重量，用于计算按重量分摊费用时单据中各行商品分摊的费用成本">
                  <a-input-number style="width: 100%" placeholder="请输入基础重量(kg)" v-decorator.trim="[ 'weight' ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="保质期" data-step="7"
                             data-title="保质期"
                             data-intro="保质期指的是商品的保质期(天)，主要针对带生产日期的，此类商品一般有批号">
                  <a-input-number style="width: 100%" placeholder="请输入保质期(天)"
                                  v-decorator.trim="[ 'expiryNum' ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" label="类别"
                             data-step="8" data-title="类别"
                             data-intro="类别需要在【商品类别】页面进行录入，录入之后在此处进行调用">
                  <a-tree-select style="width:100%" :dropdownStyle="{maxHeight:'200px',overflow:'auto'}" allow-clear
                                 :treeData="categoryTree" v-decorator="[ 'categoryId' ]" placeholder="请选择类别">
                  </a-tree-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="24">
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="序列号" data-step="9"
                             data-title="序列号"
                             data-intro="此处是商品的序列号开关，如果选择了有，则在采购入库单据需要录入该商品的序列号，在销售出库单据需要选择该商品的序列号进行出库">
                  <a-tooltip title="如果选择为有，则在采购入库单需要录入该商品的序列号">
                    <a-select placeholder="有无序列号" v-decorator="[ 'enableSerialNumber' ]">
                      <a-select-option value="1">有</a-select-option>
                      <a-select-option value="0">无</a-select-option>
                    </a-select>
                  </a-tooltip>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="批号" data-step="10" data-title="批号"
                             data-intro="此处是商品的批号开关，如果选择了有，则在采购入库单据需要录入该商品的批号和有效期，在销售出库单据需要选择该商品的批号进行出库">
                  <a-tooltip title="如果选择为有，则在采购入库单需要录入该商品的批号和有效期">
                    <a-select placeholder="有无批号" v-decorator="[ 'enableBatchNumber' ]">
                      <a-select-option value="1">有</a-select-option>
                      <a-select-option value="0">无</a-select-option>
                    </a-select>
                  </a-tooltip>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="仓位货架" data-step="11"
                             data-title="仓位货架"
                             data-intro="仓位货架指的是仓库中的仓位和货架号，主要适用于仓库较大的场景，方便查找商品的准确位置">
                  <a-input style="width: 100%" placeholder="请输入仓位货架" v-decorator.trim="[ 'position' ]"/>
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24" v-if="!model.id">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" label="多属性" data-step="12"
                             data-title="多属性"
                             data-intro="多属性是针对的sku商品（比如服装、鞋帽行业），此处开关如果启用就可以在下方进行多sku的配置，配置具体的颜色、尺码之类的组合">
                  <a-tooltip title="多属性针对服装、鞋帽等行业，需要先录入单位才能激活此处输入框">
                    <a-tag class="tag-info" v-if="!manySkuStatus">需要先录入单位才能激活</a-tag>
                    <a-select mode="multiple" v-decorator="[ 'manySku' ]" showSearch optionFilterProp="children"
                              placeholder="请选择多属性（可多选）" @change="onManySkuChange" v-show="manySkuStatus">
                      <a-select-option v-for="(item,index) in materialAttributeList" :key="index" :value="item.value"
                                       :disabled="item.disabled">
                        {{ item.name }}
                      </a-select-option>
                    </a-select>
                  </a-tooltip>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="24">
              <a-col :md="12" :sm="24" v-if="manySkuSelected>=1">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" :label="skuOneTitle">
                  <a-select mode="multiple" v-decorator="[ 'skuOne' ]" showSearch optionFilterProp="children"
                            placeholder="请选择（可多选）" @select="onSkuChange" @deselect="onSkuOneDeSelect">
                    <a-select-option v-for="(item,index) in skuOneList" :key="index" :value="item.value">
                      {{ item.name }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="12" :sm="24" v-if="manySkuSelected>=2">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" :label="skuTwoTitle">
                  <a-select mode="multiple" v-decorator="[ 'skuTwo' ]" showSearch optionFilterProp="children"
                            placeholder="请选择（可多选）" @select="onSkuChange" @deselect="onSkuTwoDeSelect">
                    <a-select-option v-for="(item,index) in skuTwoList" :key="index" :value="item.value">
                      {{ item.name }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="12" :sm="24" v-if="manySkuSelected>=3">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 4 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" :label="skuThreeTitle">
                  <a-select mode="multiple" v-decorator="[ 'skuThree' ]" showSearch optionFilterProp="children"
                            placeholder="请选择（可多选）" @select="onSkuChange" @deselect="onSkuThreeDeSelect">
                    <a-select-option v-for="(item,index) in skuThreeList" :key="index" :value="item.value">
                      {{ item.name }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <div style="margin-top:8px;" id="productDetailModal">
                <div style="margin-bottom: 16px">
                  <a-button type="primary" @click="addRow">
                    + 插入一行
                  </a-button>
                  <a-button style="margin-left: 8px" danger @click="deleteRows" type="primary"> 删除选中行</a-button>
                  <a-button style="margin-left: 8px" @click="">采购价-批量</a-button>
                  <a-button style="margin-left: 8px" @click="">零售价-批量</a-button>
                  <a-button style="margin-left: 8px" @click="">销售价-批量</a-button>
                  <a-button style="margin-left: 8px" @click="">最低售价-批量</a-button>
                  <span style="margin-left: 8px">
               </span>
                </div>
                <div>
                  <a-table :columns="columns" :dataSource="dataSource" bordered :row-selection="rowSelection" :scroll="{ x: '100%', y: 300 }">
                    <template #bodyCell="{ column, text, record }">
                      <template v-if="editableData[record.key]">
                        <a-input v-model:value="editableData[record.key][column.dataIndex]" :placeholder="`请输入${getColumnTitle(column)}`"/>
                      </template>
                    </template>
                  </a-table>
                </div>
            </div>
            <a-row class="form-row" :gutter="24">
              <a-col :lg="24" :md="24" :sm="24">
                <a-form-item :labelCol="labelCol" :wrapperCol="{xs: { span: 24 },sm: { span: 24 }}" label="">
                  <a-textarea :rows="1" placeholder="请输入备注" v-decorator="[ 'remark' ]" style="margin-top:8px;"/>
                </a-form-item>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="2" tab="扩展信息" forceRender>
            <a-row v-if="mpShort.mfrs.enabled" class="form-row" :gutter="24">
              <a-col :lg="6" :md="6" :sm="6">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" :label="mpShort.mfrs.name">
                  <a-input v-decorator.trim="[ 'mfrs' ]"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="mpShort.otherField1.enabled" class="form-row" :gutter="24">
              <a-col :lg="6" :md="6" :sm="6">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" :label="mpShort.otherField1.name">
                  <a-input v-decorator.trim="[ 'otherField1' ]"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="mpShort.otherField2.enabled" class="form-row" :gutter="24">
              <a-col :lg="6" :md="6" :sm="6">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" :label="mpShort.otherField2.name">
                  <a-input v-decorator.trim="[ 'otherField2' ]"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="mpShort.otherField3.enabled" class="form-row" :gutter="24">
              <a-col :lg="6" :md="6" :sm="6">
                <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" :label="mpShort.otherField3.name">
                  <a-input v-decorator.trim="[ 'otherField3' ]"/>
                </a-form-item>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="3" tab="库存数量" forceRender>
            <template #buttonAfter>
              <a-button style="margin: 0px 0px 8px 0px" @click="batchSetStock('initStock')">期初库存-批量</a-button>
              <a-button style="margin-left: 8px" @click="batchSetStock('lowSafeStock')">最低安全库存-批量</a-button>
              <a-button style="margin-left: 8px" @click="batchSetStock('highSafeStock')">最高安全库存-批量</a-button>
            </template>
          </a-tab-pane>
          <a-tab-pane key="4" tab="图片信息" forceRender>
            <a-row class="form-row" :gutter="24">
              <a-col :lg="18" :md="18" :sm="24">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 3 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" label="图片信息">
                </a-form-item>
              </a-col>
              <a-col :lg="6" :md="6" :sm="24"></a-col>
            </a-row>
            <a-row class="form-row" :gutter="24">
              <a-col :lg="18" :md="18" :sm="24">
                <a-form-item :labelCol="{xs: { span: 24 },sm: { span: 3 }}"
                             :wrapperCol="{xs: { span: 24 },sm: { span: 20 }}" label="上传提示">
                  图片最多4张，且单张大小不超过1M
                </a-form-item>
              </a-col>
              <a-col :lg="6" :md="6" :sm="24"></a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-form>
    </a-spin>
  </a-modal>

</template>

<script lang="ts">
import {ref, reactive} from 'vue';
import {
  Modal,
  Upload,
  Button,
  Spin,
  Row,
  Col,
  FormItem,
  Form,
  Tabs,
  Select,
  Tooltip,
  TreeSelect, InputNumber, Checkbox, SelectOption, TabPane, Table,
} from "ant-design-vue";
import {cloneDeep} from 'lodash-es';

export default {
  name: 'ProductInfoModal',
  emits: ['success', 'cancel'],
  components: {
    'a-modal': Modal,
    'a-upload': Upload,
    'a-a-button': Button,
    'a-spin': Spin,
    'a-row': Row,
    'a-col': Col,
    'a-form': Form,
    'a-form-item': FormItem,
    'a-input-number': InputNumber,
    'a-select': Select,
    'a-select-option': SelectOption,
    'a-tree-select': TreeSelect,
    'a-checkbox': Checkbox,
    'a-tooltip': Tooltip,
    'a-tabs': Tabs,
    'a-tab-pane': TabPane,
    'a-table': Table,
  },
  setup(_, context) {
    const confirmLoading = ref(false);
    const title = ref('新增商品信息');
    const open = ref(false);
    const prefixNo = ref('material');
    const manySkuSelected = ref(0);
    const unitChecked = ref(false);
    const manyUnitStatus = ref(false);
    const manySkuStatus = ref(false);

    const unitStatus = ref(false);
    const switchDisabled = ref(false);
    const barCodeSwitch = ref(false);

    const skuOneTitle = ref('属性1');
    const skuTwoTitle = ref('属性2');
    const skuThreeTitle = ref('属性3');

    const model = ref({});

    const labelCol = reactive({
      xs: {span: 24},
      sm: {span: 8},
    })
    const wrapperCol = reactive({
      xs: {span: 24},
      sm: {span: 16},
    })
    const unitList = reactive([])
    const skuOneList = reactive([])
    const skuTwoList = reactive([])
    const skuThreeList = reactive([])
    const materialAttributeList = reactive([])
    const categoryTree = reactive([])
    const validatorRules = reactive({
      name: {
        rules: [
          {required: true, message: '请输入名称!'},
          {max: 100, message: '长度请小于100个字符', trigger: 'blur'}
        ]
      },
      standard: {
        rules: [
          {max: 100, message: '长度请小于100个字符', trigger: 'blur'}
        ]
      },
      model: {
        rules: [
          {max: 100, message: '长度请小于100个字符', trigger: 'blur'}
        ]
      },
      unit: {
        rules: [
          {required: true, message: '请输入单位!'}
        ]
      },
      unitId: {
        rules: [
          {required: true, message: '请选择多单位!'}
        ]
      }
    })
    const mpShort = reactive({
      mfrs: {},
      otherField1: {},
      otherField2: {},
      otherField3: {}
    })

    function addUnit() {

    }

    function handleCancel() {
      close();
      context.emit('cancel');
    }

    function closeModal() {
      open.value = false
    }

    function openModal() {
      open.value = true
    }

    function unitOnChange() {

    }

    function onlyUnitOnChange() {

    }

    function manyUnitOnChange() {

    }

    function onSkuChange() {
      let skuOneData = this.form.getFieldValue('skuOne')
      let skuTwoData = this.form.getFieldValue('skuTwo')
      let skuThreeData = this.form.getFieldValue('skuThree')
      this.autoSkuList(skuOneData, skuTwoData, skuThreeData)
    }

    function onSkuOneDeSelect(value) {

    }

    function onSkuTwoDeSelect(value) {
      let skuOneData = this.form.getFieldValue('skuOne')
      let skuTwoData = this.form.getFieldValue('skuTwo')
      let skuThreeData = this.form.getFieldValue('skuThree')
      //  removeByVal(skuTwoData, value)
      this.autoSkuList(skuOneData, skuTwoData, skuThreeData)
    }

    function onSkuThreeDeSelect(value) {

    }

    function onManySkuChange(value) {
      this.manySkuSelected = value.length
    }

    function batchSetStock(type) {

    }

    const columns = [
      {
        title: '条码',
        dataIndex: 'barCode',
      },
      {
        title: '单位',
        dataIndex: 'unit',
      },
      {
        title: '采购价',
        dataIndex: 'purchasePrice',
      },
      {
        title: '零售价',
        dataIndex: 'retailPrice',
      },
      {
        title: '销售价',
        dataIndex: 'salesPrice',
      },
      {
        title: '最低售价',
        dataIndex: 'lowSalesPrice',
      },
    ];

    const data = [
      {
        key: 0,
        barCode: '1004',
        unit: '',
        purchasePrice: '',
        retailPrice: '',
        salesPrice: '',
        lowSalesPrice: '',
      }
    ];
    const dataSource = ref(data);
    const editableData = reactive({
      0: cloneDeep(data[0]) // 添加键为0的条目
    });


    const addRow = () => {
      const newRow = {
        key: (dataSource.value.length + 1),
        barCode: '',
        unit: '',
        purchasePrice: '',
        retailPrice: '',
        salesPrice: '',
        lowSalesPrice: '',
      };
      editableData[newRow.key] = cloneDeep(newRow); // 将新行添加到editableData
      dataSource.value.push(newRow);
      edit(newRow.key);
    };

    const getColumnTitle = (column) => {
      return column.title.replace(/<[^>]+>/g, '');
    };

    const deleteKey = (key) => {

    }

    const edit = (key) => {
      if (key === 0) {
        editableData[0] = cloneDeep(dataSource.value.find(item => item.key === 0));
      } else {
        editableData[key] = cloneDeep(dataSource.value.find(item => item.key === key));
      }
    };

    const rowSelection = ref({
      selectedRowKeys: [],
      onChange: (selectedRowKeys) => {
        rowSelection.value.selectedRowKeys = selectedRowKeys;
      }
    });

    function deleteRows() {
      const selectedKeys = rowSelection.value.selectedRowKeys;
      dataSource.value = dataSource.value.filter(row => !selectedKeys.includes(row.key));
      rowSelection.value.selectedRowKeys = [];
    }

    return {
      confirmLoading,
      openModal,
      closeModal,
      handleCancel,
      title,
      open,
      prefixNo,
      labelCol,
      wrapperCol,
      validatorRules,
      manySkuSelected,
      unitChecked,
      unitStatus,
      manyUnitStatus,
      manySkuStatus,
      switchDisabled,
      barCodeSwitch,
      onSkuChange,
      onSkuOneDeSelect,
      onSkuTwoDeSelect,
      onSkuThreeDeSelect,
      unitList,
      skuOneList,
      skuTwoList,
      skuThreeList,
      materialAttributeList,
      addUnit,
      unitOnChange,
      onlyUnitOnChange,
      manyUnitOnChange,
      skuOneTitle,
      skuTwoTitle,
      skuThreeTitle,
      categoryTree,
      onManySkuChange,
      batchSetStock,
      mpShort,
      model,
      columns,
      dataSource,
      addRow,
      editableData,
      getColumnTitle,
      deleteKey,
      deleteRows,
      rowSelection
    };
  },
}
</script>

<style scoped>
.tag-info {
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  width: 100%;
  padding: 0px 11px;
  color: #bbb;
  background-color: #ffffff;
}
</style>