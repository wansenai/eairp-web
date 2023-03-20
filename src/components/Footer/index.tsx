import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '万森（陕西）工业技术有限公司出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'WanSen Tech',
          href: 'https://wansentech.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wansentech/',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'WanSen Tech Open Source',
          href: 'https://github.com/wansentech/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
