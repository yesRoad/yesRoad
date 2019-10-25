import React from 'react';
import Helmet from 'react-helmet';
import Main from '@/Main';
import '@styles/index.scss';

const Index = () => (
  <>
    <Helmet title="Main Page" />
    <Main />
  </>
);

export default Index;
