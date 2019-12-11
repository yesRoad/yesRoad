import React from 'react';
import Link from 'next/link';
import '@styles/layout/header.scss';


class Header extends React.Component {


  handleClick = () => {
    this.check.click();
  };


  render() {
    return(
      <header>
      <nav className="menu">
        <input type="checkbox" ref={ref => {this.check = ref}} />
        <span className="span01" />
        <span className="span02" />
        <span className="span03" />

        <div className="menu-area">
          <ul onClick={this.handleClick}>
            <li><Link href="/index" as="/"><a>Home</a></Link><i class="line"></i></li>
            <li><Link href="/contact"><a>Contact Me</a></Link><i class="line"></i></li>
            <li><a href="#none">Menu02</a><i class="line"></i></li>
            <li><a href="#none">Menu03</a><i class="line"></i></li>
          </ul>
        </div>
      </nav>
    </header>
    )
  }
}


export default Header;
