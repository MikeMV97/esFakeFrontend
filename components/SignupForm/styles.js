import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .submit {
    background-color: ${(props) => props.theme.red};
    color: ${(props) => props.theme.white};
    margin-top: 2.5rem;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 0.5rem 3rem;
  }
`;
