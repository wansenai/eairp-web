import React from 'react';
import { Button, ConfigProvider} from 'antd';
import { DefaultFooter, PageContainer, ProLayout } from '@ant-design/pro-components';
import 'antd/dist/reset.css';

const App: React.FC = () => (
  <ProLayout
      style={{
      height: '100vh',
    }}
    breakpoint={false}
    collapsed
    location={{
      pathname: '/welecome',
    }}
    footerRender={() => (
      <DefaultFooter
        links = {[
          {key: 'home', title: '首页', href: 'https://wansentech.com'},
          {key: 'user', title: '用户管理', href: '/user'}
        ]}
        copyright= "wansen tech team"
      />
    )}
  >
    <PageContainer content="ERP系统">ERP System</PageContainer>
  </ProLayout>
);

export default App;
