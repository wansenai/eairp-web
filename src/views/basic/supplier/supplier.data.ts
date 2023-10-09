import {FormSchema} from "@/components/Form";
import {BasicColumn} from "@/components/Table";
import { h } from 'vue';
import {Switch} from "ant-design-vue";
import {useMessage} from "@/hooks/web/useMessage";
import {useI18n} from "@/hooks/web/useI18n";
import {updateSupplier, updateSupplierStatus} from "@/api/basic/supplier";

const { t } = useI18n();

export const columns: BasicColumn[] = [
    {
        title: '名称',
        dataIndex: 'supplierName',
        width: 180,
    },
    {
        title: '联系人',
        dataIndex: 'contact',
        width: 80,
    },
    {
        title: '联系电话',
        dataIndex: 'contactNumber',
        width: 120,
    },
    {
        title: '电子邮箱',
        dataIndex: 'email',
        width: 120,
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 100,
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
                    updateSupplierStatus({id: record.id, status: newStatus} )
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
        title: '累计应收账款',
        dataIndex: 'totalAccountReceivable',
        width: 90,
    },
    {
        title: '累计应付账款',
        dataIndex: 'totalAccountPayment',
        width: 90,
    },
    {
        title: '税率',
        dataIndex: 'taxRate',
        width: 80,
    },
    {
        title: '排序',
        dataIndex: 'sort',
        width: 80,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 150,
    }
]

export const searchFormSchema: FormSchema[] = [
    {
        label: '名称',
        field: 'computeUnit',
        component: 'Input',
        colProps: { span: 8 },
    },
    {
        label: '联系电话',
        field: 'computeUnit',
        component: 'Input',
        colProps: { span: 8 },
    },
    {
        label: '时间',
        field: 'computeUnit',
        component: 'Input',
        colProps: { span: 8 },
    }
]