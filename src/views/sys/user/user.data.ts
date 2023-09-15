import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { getDepartmentList } from '/@/api/sys/department';
import { updateUser } from '/@/api/sys/user';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('sys.login.username'),
    dataIndex: 'username',
    width: 30,
  },
  {
    title: t('sys.user.name'),
    dataIndex: 'name',
    width: 30,
  },
  {
    title: t('sys.role.roleTitle'),
    dataIndex: 'roleTitle',
    width: 30,
  },
  {
    title: t('sys.login.email'),
    dataIndex: 'email',
    width: 40,
  },
  {
    title: t('sys.user.phoneNumber'),
    dataIndex: 'phoneNumber',
    width: 40,
  },
  {
    title: t('common.status'),
    dataIndex: 'status',
    width: 20,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === 1,
        checkedChildren: t('common.on'),
        unCheckedChildren: t('common.off'),
        loading: record.pendingStatus,
        onChange(checked, _) {
          const { createMessage } = useMessage();
          if (record.id == 1) {
            createMessage.warn(t('sys.role.adminStatusChangeForbidden'));
            return;
          }

          record.pendingStatus = true;
          const newStatus = checked ? 1 : 2;
          updateUser({ id: record.id, status: newStatus })
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
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 40,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: t('sys.login.username'),
    component: 'Input',
    colProps: { span: 8 },
    rules: [{ max: 50 }],
  },
  {
    field: 'name',
    label: t('sys.user.name'),
    component: 'Input',
    colProps: { span: 8 },
    rules: [{ max: 40 }],
  },
  {
    field: 'mobile',
    label: t('sys.login.mobile'),
    component: 'Input',
    colProps: { span: 8 },
    rules: [{ max: 18 }],
  },
  {
    field: 'email',
    label: t('sys.login.email'),
    component: 'Input',
    colProps: { span: 8 },
    rules: [{ max: 70 }],
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'avatar',
    label: t('sys.user.avatar'),
    defaultValue: '',
    component: 'Input',
    show: false,
  },
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: t('sys.login.username'),
    required: true,
    component: 'Input',
    rules: [{ max: 50 }],
  },
  {
    field: 'name',
    label: t('sys.user.name'),
    required: true,
    component: 'Input',
    rules: [{ max: 40 }],
  },
  {
    field: 'desc',
    label: t('sys.user.description'),
    required: false,
    component: 'Input',
    rules: [{ max: 100 }],
  },
  {
    field: 'homePath',
    label: t('sys.user.homePath'),
    required: false,
    defaultValue: '/dashboard',
    component: 'Input',
    rules: [{ max: 70 }],
  },
  {
    field: 'mobile',
    label: t('sys.login.mobile'),
    component: 'Input',
    rules: [{ max: 18 }],
  },
  {
    field: 'email',
    label: t('sys.login.email'),
    required: true,
    component: 'Input',
    rules: [{ type: 'email' }],
  },
  {
    field: 'password',
    label: t('sys.login.password'),
    component: 'Input',
  },
  {
    field: 'departmentId',
    label: t('sys.department.userDepartment'),
    component: 'ApiTreeSelect',
    required: true,
    componentProps: {
      api: getDepartmentList,
      params: {
        page: 1,
        pageSize: 1000,
        name: '',
        leader: '',
      },
      resultField: 'data',
      labelField: 'trans',
      valueField: 'id',
    },
  },
  {
    field: 'status',
    label: t('common.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: t('common.on'), value: 1 },
        { label: t('common.off'), value: 2 },
      ],
    },
  },
];
