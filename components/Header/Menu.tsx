import {
  GlobalOutlined,
  HeartOutlined,
  HomeOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

export function AppMenu() {
  return (
    <Menu mode="horizontal" className="right-menu">
      <Menu.Item key="/home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="/beds" icon={<HeartOutlined />}>
        Beds
      </Menu.Item>
      <Menu.SubMenu key="/language" icon={<GlobalOutlined />} title="Language">
        <Menu.Item key="//en">English</Menu.Item>
        <Menu.Item key="//mr">Marathi</Menu.Item>
        <Menu.Item key="//hi">Hindi</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="/faqs" icon={<QuestionCircleOutlined />}>
        FAQs
      </Menu.Item>
      <Menu.Item key="/sign-in" icon={<LoginOutlined />}>
        Login
      </Menu.Item>
    </Menu>
  );
}
