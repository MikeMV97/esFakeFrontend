import styled from "styled-components";

export const StyledNew = styled.div`
  width: calc(100% - 6rem);
  padding: 0px 3rem;
  border: 1px solid ${(props) => props.theme.black};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 85px;
    border: 1px solid ${(props) => props.theme.black};
  }
  h5 {
    font-size: 18px;
    margin-top: 2re;
    margin-bottom: 0px;
  }

  p {
    margin-top: 14px;
    width: auto;
    word-break: break-all;
  }

  button {
    width: 100%;
    border: none;
    font-size: 16px;
    background: ${(props) => props.theme.lightCoral};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 1.4rem;
  }

  button:hover {
      cursor: pointer;
  }
`;
