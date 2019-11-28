import React from 'react';
import Link from 'next/link';
import '@styles/layout/header.scss';


class Header extends React.Component {

  state = {
    isVisible: true
  }

  handleClick = () => {
    if(this.state.isVisible){
      this.menu.style.visibility = 'visible'

      this.setState({
        isVisible: false
      });
    } else {
      this.menu.style.visibility = 'hidden'

      this.setState({
        isVisible: true
      });      
    }
    this.check.checked = false;    
  };

  render() {
    return(
      <header>
      <nav className="menu">
        <input type="checkbox" ref={ref => {this.check = ref}} />
        <span className="span01" />
        <span className="span02" />
        <span className="span03" />

        <div className="menu-area" ref={ref => {this.menu = ref}} >
          <ul onClick={this.handleClick}>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/contact"><a>Contact Me</a></Link></li>
            <li><a href="#none">Menu02</a></li>
            <li><a href="#none">Menu03</a></li>
          </ul>
        </div>
      </nav>
    </header>
    )
  }
}


export default Header;
