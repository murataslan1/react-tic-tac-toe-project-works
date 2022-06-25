import React from 'react'
import styled from 'styled-components'
import logo from './../assets/logo.svg'

const StyledHeader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 1px;
  height: 50px;
  padding: 10px;
  .header-logo {
    height: 50px;
    width: 50px;
  }
  .header-title {
    color: white;
    font-size: 1.1em;
    margin: 0;
  }
  @media (prefers-reduced-motion: no-preference) {
    .header-logo {
      animation: header-logo-spin infinite 20s linear;
    }
  }
  @keyframes header-logo-spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
` 

function Header(){
  return(
    <StyledHeader>
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Tic Tac Toe challenge</h1>
    </StyledHeader>
  )
}

export default Header