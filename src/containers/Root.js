/**
 * Import dependencies
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

/**
 * Import assets
 */
import logo from '../assets/logo-small.png';
import '../styles/Root.css';

/**
 * Primitives
 */
const LogoLink = styled(Link)`

`;

const Logo = styled.img`
  max-width: 7%;
`;

class Root extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <LogoLink to="/">
            <Logo src={logo} alt="logo" />
          </LogoLink>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Root;
