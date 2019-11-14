import React from 'react';
import '@styles/layout/loader.scss';

const Loader = ({ isLoader }) => (
  <>
    <aside className={isLoader ? 'show' : 'hide'}><img src="static/images/loader.gif" alt="Loading"/></aside>
  </>
);

export default Loader;
