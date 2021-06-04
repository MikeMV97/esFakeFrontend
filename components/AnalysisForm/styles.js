import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  span {
    font-family: "Proza Libre", sans-serif;
    font-size: 36px;
    font-weight: 700;
    display: block;
  }

  .text {
    height: 42px;
    font-size: 28px;
    border: none;
    width: calc(100% - 2px - 2rem);
    border: 1px solid #ededed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0px 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  input,
  input:focus {
    outline: none;
  }

  textarea {
    width: 100%;
    height: 365px;
    font-size: 16px;
    border: none;
    width: calc(100% - 2px - 2rem);
    border: 1px solid #ededed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0px 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    resize: none;
    overflow-y: auto;
  }

  .submit {
    background: ${(props) => props.theme.red};
    color: ${props => props.theme.white};
    width: 219px;
    height: 36px;
    font-size: 18px;
    font-weight: bold;
    margin-left: calc(100% - 219px);
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;
