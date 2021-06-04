import styled from "styled-components";

export const StyledSidebar = styled.aside`
  position: sticky;
  top: 0px;
  background: ${(props) => props.theme.lightCoral};
  max-width: calc(480px - 8rem);
  height: 100vh;
  padding: 0px 4rem;
  box-shadow: 7px 0px 15px -1px rgba(106, 106, 106, 0.72);

  * {
    color: white;
  }

  h3 {
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
    padding: 3rem 0px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  a {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem 0px;
    text-decoration: none;
  }

  a > li {
    font-size: 24px;
    font-weight: bold;
    margin-left: 24px;
  }

  a:hover {
      cursor: pointer;
  }
`;
