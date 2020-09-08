import { Breadcrumb, Layout, Menu, PageHeader } from 'antd';
import React from 'react';
import {
  WithTranslation,
  withTranslation,
  WithTranslationProps,
} from 'react-i18next';
import { useRouter } from 'next/router';

const { Content, Footer, Header } = Layout;

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children, t }: DefaultLayoutProps & WithTranslation) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        .layout {
          min-height: 100vh;
        }
      `}</style>
      <Layout className="layout">
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: '#FFF',
          }}
        >
          <Menu mode="horizontal" onClick={(e) => {}}>
            <Menu.Item key="1">{t('beds')}</Menu.Item>
            <Menu.Item key="2">{t('FAQs')}</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 24px', marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Powered by Kolhapur</Footer>
      </Layout>
    </>
  );
}

export default withTranslation('common')(DefaultLayout);
