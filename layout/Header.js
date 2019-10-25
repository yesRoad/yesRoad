import React from 'react';
import Link from 'next/link';
import '@styles/layout/header.scss';

const Header = () => (
  <header>
    <nav className="menu">
      <input type="checkbox" />
      <span className="span01" />
      <span className="span02" />
      <span className="span03" />

      <div className="menu-area">
        <ul>
          <li><Link href="/index"><a>Home</a></Link></li>
          <li><Link href="/contact"><a>Contact Me</a></Link></li>
          <li><a href="#none">Menu02</a></li>
          <li><a href="#none">Menu03</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
