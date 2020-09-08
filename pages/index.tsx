import React from 'react';
import DefaultLayout from 'layouts/default/index';
import { Statistics } from 'components/Statistics';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function HomePage() {
  return (
    <DefaultLayout>
      <title>Covid Bed Search</title>
      <style jsx global>{`
        .content-wrapper {
          display: flex;
        }

        .app-menu {
          width: 260px;
        }

        .main-container {
          flex-grow: 1;
          margin-left: 24px;
        }
      `}</style>
      <div className="content-wrapper">
        <Menu
          onClick={() => {}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          className="app-menu"
        >
          <Menu.Item key="1">Hospital Beds</Menu.Item>
          <Menu.Item key="2">Ventilators</Menu.Item>
        </Menu>
        <div className="main-container">
          <Statistics />
        </div>
      </div>
    </DefaultLayout>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default HomePage;
