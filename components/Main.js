/* eslint-disable no-script-url */
import React from 'react';
import '@styles/index.scss';

const Main = () => (
  <>
    <section>
      <article>
        <h2><img className="logo" src={require('@images/img-test.png')} alt="" /></h2>
        <hr />
        <p className="name">Lorem Ipsum</p>
        <span className="sub-tit">Lorem Ipsum Ipsum</span>
        <a href="#none">Get Lorem</a>
      </article>
    </section>
  </>
);

export default Main;
