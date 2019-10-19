import App, { Container } from 'next/app';
import React from 'react';
import '@styles/reset.scss';
import Header from '@layout/Header';
import Footer from '@layout/Footer';

export default class RootApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <div>
          <Header />
          <main>
            <Component />
          </main>
          <Footer />
        </div>
      </Container>
    );
  }
}
