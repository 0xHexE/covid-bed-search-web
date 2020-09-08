import React from 'react';
import DefaultLayout from 'layouts/default/index';
import { MainTableViewer } from '../components/MainTableViewer';
import Head from 'next/head';

function HomePage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Covid Bed Search</title>
      </Head>
      <MainTableViewer />
    </DefaultLayout>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default HomePage;
