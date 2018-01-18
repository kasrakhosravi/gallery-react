/**
 * Global dependencies
 */
import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * Import assets
 */
import logo from '../assets/logo-small.png';

/**
 * Primitive
 */
const Logo = styled.img`
  max-width: 100%;
  padding: 20px 0;
`;

/**
 * Primitive
 */
const LoadingContainer = styled.div`
  color: #fff;
  background-color: #222;
  height: 100vh;
  padding: 50px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <Logo src={logo} alt="logo" />
        {this.props.children}
      </LoadingContainer>
    );
  }
}

export default Loading;
