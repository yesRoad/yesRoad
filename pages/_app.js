import App, { Container } from 'next/app';
import React from 'react';
import '@styles/reset.scss';
import Header from '@layout/Header';
import Footer from '@layout/Footer';
import BackGround from '@layout/BackGround';


export default class RootApp extends App {
  state = {
    width: 0,
    height: 0,
    moveX: '0px',
    moveY: '0px'
  }

  componentDidMount = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  backGroundMoveHandler = (e)=> {
    this.setState({
      moveX: `${((this.state.width / 2) - e.clientX) * 0.2}px`,
      moveY: `${((this.state.height / 2) - e.clientY) * 0.2}px`
    })
  }
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <div className="body-container" onMouseMove={(e)=>{this.backGroundMoveHandler(e)}}>
          <BackGround moveX={this.state.moveX} moveY={this.state.moveY}/>
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
