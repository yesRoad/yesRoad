import React from 'react';
import '@styles/layout/background.scss';

const BackGround = ({ moveX, moveY }) => (
  <section className="body-background" style={{ marginLeft: moveX, marginTop: moveY }} />
);


export default BackGround;
