import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  align-items: center;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0px;
  z-index: 99999;

  h3 {
      font-size: 48px;
      color: ${props => props.theme.white};
      padding: 0px;
      margin: 0px;
      margin-right: 2rem;
  }

  ul {
      display: flex;
      list-style: none;
      padding: 0px;
      width: 50%;
      justify-content: space-evenly;
  }

  li {
      font-size: 18px;
  }

  li:hover {
      cursor: pointer;
  }

  .login {
      margin-right: 3rem;
  }
`;
