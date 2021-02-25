import React from 'react';
import DefaultLayout from 'layouts/default/index';
import Head from 'next/head';
import SearchPlace from '../components/SearchPlace';

function HomePage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Corona Bed Search Kolhapur</title>
      </Head>

      <SearchPlace />
    </DefaultLayout>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default HomePage;
