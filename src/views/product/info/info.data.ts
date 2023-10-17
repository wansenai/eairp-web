import {FormSchema} from "@/components/Form";
import {BasicColumn} from "@/components/Table";
import { h } from 'vue';
import {Switch} from "ant-design-vue";
import {useMessage} from "@/hooks/web/useMessage";
import {useI18n} from "@/hooks/web/useI18n";
import {updateOperatorStatus} from "@/api/basic/operator";

const { t } = useI18n();

export const columns: BasicColumn[] = [
    {
        title: '条码',
        dataIndex: 'name',
        width: 80,
    },
    {
        title: '名称',
        dataIndex: 'type',
        width: 100,
    },
    {
        title: '规格',
        dataIndex: 'type',
        width: 80,
    },
    {
        title: '型号',
        dataIndex: 'type',
        width: 100,
    },
    {
        title: '颜色',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '类别',
        dataIndex: 'type',
        width: 80,
    },
    {
        title: '单位',
        dataIndex: 'type',
        width: 80,
    },
    {
        title: '库存',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '采购价',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '零售价',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '销售价',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '最低售价',
        dataIndex: 'type',
        width: 60,
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 80,
        customRender: ({ record }) => {
            if (!Reflect.has(record, 'pendingStatus')) {
                record.pendingStatus = false;
            }
            return h(Switch, {
                checked: record.status === 0,
                checkedChildren: t('common.on'),
                unCheckedChildren: t('common.off'),
                loading: record.pendingStatus,
                onChange(checked, _) {
                    const {createMessage} = useMessage();
                    if (record.id == 1) {
                        createMessage.warn(t('common.notice'));
                        return;
                    }
                    record.pendingStatus = true;
                    const newStatus = checked ? 0 : 1;
                    updateOperatorStatus([record.id], newStatus )
                        .then(() => {
                            record.status = newStatus;
                        })
                        .finally(() => {
                            record.pendingStatus = false;
                        });
                },
            });
        }
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 80,
    }
]

export const searchFormSchema: FormSchema[] = [
    {
        label: '类别',
        field: 'type',
        component: 'Select',
        colProps: {
            xl: 8,
            xxl: 8,
        },
    },
    {
        label: '关键词',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 8,
            xxl: 8,
        },
    },
    {
        label: '颜色',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 8,
            xxl: 8,
        },
    },
    {
        label: '状态',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '序列号',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '批次号',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '仓位货架',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '扩展信息',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '基础重量',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '保质期',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
    {
        label: '备注',
        field: 'name',
        component: 'Input',
        colProps: {
            xl: 12,
            xxl: 8,
        },
    },
]

export const formSchema: FormSchema[] = [

]