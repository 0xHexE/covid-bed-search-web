import React from 'react';
import DefaultLayout from 'layouts/default/index';
import { MainTableViewer } from '../components/MainTableViewer';

function HomePage() {
  return (
    <DefaultLayout>
      <title>Covid Bed Search</title>
      <MainTableViewer />
    </DefaultLayout>
  );
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default HomePage;
