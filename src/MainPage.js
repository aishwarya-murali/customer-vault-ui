import React, { Component } from 'react';
import './App.css';
import Link from '@mulesoft/anypoint-components/lib/Link';
import anypointStyles from '@mulesoft/anypoint-styles/anypoint-styles.css';
import navbarStyles   from '@mulesoft/anypoint-navbar/lib/anypoint-navbar.css';

class MainPage extends Component {

  constructor (props, context) {
      super(props, context)
      this.state = {
        sideNavOpen: false
      }
      this.open = this.open.bind(this)
      this.close = this.close.bind(this)
      this.submenuRenderer = (l) => {
          return(
            <li><Link to={"#"+l.to}>{l.label}</Link></li>
          );
      }
  }

    open () {
        this.setState({
          sideNavOpen: true
        })
    }

    close () {
        this.setState({
          sideNavOpen: false
        })
    }
    render() {
      return(
        <div>
          {this.props.children}
        </div>
      );
    }
}

export default MainPage;


// <List items={links} itemRenderer= {this.submenuRenderer} />
