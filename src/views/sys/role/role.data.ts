import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/sys/role';
import { useMessage } from '/@/hooks/web/useMessage';
import {useI18n} from "@/hooks/web/useI18n";
import {updateStatus} from "@/api/sys/user";

const { t } = useI18n();

export const columns: BasicColumn[] = [
    {
        title: '角色名称',
        dataIndex: 'roleName',
        width: 200,
    },
    {
        title: '类型',
        dataIndex: 'type',
        width: 120,
    },
    {
        title: '价格屏蔽',
        dataIndex: 'priceLimit',
        width: 120,
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 120,
        customRender: ({ record }) => {
            if (!Reflect.has(record, 'pendingStatus')) {
                record.pendingStatus = false;
            }
            return h(Switch, {
                checked: record.status === 0,
                checkedChildren: t('common.on'),
                unCheckedChildren: t('common.off'),
                loading: record.pendingStatus,
                onChange(checked: boolean) {
                    record.pendingStatus = true;
                    const newStatus = checked ? 0 : 1;
                    setRoleStatus(record.id, newStatus)
                        .then(() => {
                            record.status = newStatus;
                        })
                        .finally(() => {
                            record.pendingStatus = false;
                        });
                },
            });
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 180,
    },
    {
        title: '备注',
        dataIndex: 'description',
    },
];

export const searchFormSchema: FormSchema[] = [
    {
        field: 'roleName',
        label: '角色名称',
        component: 'Input',
        colProps: { span: 8 },
    },
    {
        field: 'status',
        label: '状态',
        component: 'Select',
        componentProps: {
            options: [
                { label: '启用', value: '0' },
                { label: '停用', value: '1' },
            ],
        },
        colProps: { span: 8 },
    },
];

export const formSchema: FormSchema[] = [
    {
        field: 'roleName',
        label: '角色名称',
        required: true,
        component: 'Input',
    },
    {
        field: 'roleValue',
        label: '角色值',
        required: true,
        component: 'Input',
    },
    {
        field: 'status',
        label: '状态',
        component: 'RadioButtonGroup',
        defaultValue: '0',
        componentProps: {
            options: [
                { label: '启用', value: '1' },
                { label: '停用', value: '0' },
            ],
        },
    },
    {
        label: '备注',
        field: 'remark',
        component: 'InputTextArea',
    },
    {
        label: ' ',
        field: 'menu',
        slot: 'menu',
        component: 'Input',
    },
];