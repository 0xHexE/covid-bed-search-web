import { Layout } from 'antd';
import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Header } from 'components/Header';
import './style.less';

const { Content, Footer } = Layout;

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children, t }: DefaultLayoutProps & WithTranslation) {
  const router = useRouter();

  return (
    <>
      <Layout className="app-layout">
        <Header />
        <Content className="site-layout">
          <div className="site-layout-background" style={{ minHeight: 380 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Open source available at{' '}
          <a
            href="https://github.com/httpsOmkar/covid-bed-search-web"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
          &nbsp; App icon by{' '}
          <a target="_blank" rel="noopener" href="https://icons8.com/">
            icons8
          </a>
          .
        </Footer>
      </Layout>
    </>
  );
}

export default withTranslation('common')(DefaultLayout);
