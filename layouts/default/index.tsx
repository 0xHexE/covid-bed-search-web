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

        .app-header {
          position: fixed;
          z-index: 1;
          width: 100%;
          background-color: #fff;
        }

        .site-layout {
          margin-top: 64px;
        }

        @media (min-width: 599px) {
          .site-layout {
            padding: 0 24px;
          }
        }
      `}</style>
      <Layout className="layout">
        <Header className="app-header">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[router.pathname]}
            onClick={(e) => {
              router.push(e.key as string);
            }}
          >
            <Menu.Item key="/">{t('beds')}</Menu.Item>
            <Menu.Item key="/faqs">{t('FAQs')}</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
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
