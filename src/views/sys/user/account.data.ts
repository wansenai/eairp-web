import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import {updateStatus} from "@/api/sys/user";

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('sys.login.userName'),
    dataIndex: 'username',
    width: 120,
  },
  {
    title: t('sys.user.name'),
    dataIndex: 'name',
    width: 120,
  },
  {
    title: t('sys.user.roleName'),
    dataIndex: 'roleName',
    width: 120,
  },
  {
    title: t('sys.user.status'),
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
            createMessage.warn('提示');
            return;
          }
          record.pendingStatus = true;
          const newStatus = checked ? 0 : 1;
          updateStatus({id: record.id, status: newStatus} )
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
    title: t('sys.login.email'),
    dataIndex: 'email',
    width: 120,
  },
  {
    title: t('sys.login.mobile'),
    dataIndex: 'phoneNumber',
    width: 120,
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: t('sys.login.userName'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: t('sys.user.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '用户id',
    show: false,
    component: 'Input',
  },
  {
    field: 'username',
    label: t('sys.login.userName'),
    component: 'Input',
    helpMessage: ['这里需要异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    field: 'deptName',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'roleName',
    label: t('sys.user.roleName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: t('sys.user.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'phoneNumber',
    label: t('sys.login.mobile'),
    component: 'Input',
    required: true,
  },
  {
    field: 'email',
    label: t('sys.login.email'),
    component: 'Input',
    required: true,
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];
