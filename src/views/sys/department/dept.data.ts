import {BasicColumn, FormSchema} from "@/components/Table";
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
    {
        title: '部门名称',
        dataIndex: 'deptName',
        width: 160,
        align: "left",
    },
    {
        title: '部门编号',
        dataIndex: 'deptNumber',
        width: 160,
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 80,
        customRender: ({ record }) => {
            const status = record.status;
            const enable = ~~status === 0;
            const color = enable ? 'green' : 'red';
            const text = enable ? '启用' : '停用';
            return h(Tag, { color: color }, () => text);
        },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 180,
    },
    {
        title: '备注',
        dataIndex: 'remark',
        width: 180
    },
]

export const searchFormSchema: FormSchema[] = [
    {
        field: 'deptName',
        label: '部门名称',
        component: 'Input',
        colProps: { span: 8 },
    }
]