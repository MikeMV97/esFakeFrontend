import styled from 'styled-components';


export const InputContainer = styled.label`
    
    margin-top: 2rem;
    display: inline-block;
    
    span {
        margin-bottom: 12px;
        display: inline-block;
    }
`

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border: 1px solid #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  i {
    color: ${(props) => props.theme.lightCoral};
    margin-left: 8px;
    font-size: 32px;
  }

  input {
    border: none;
    width: 100%;
    margin: 0px 8px;
  }

  input,
  input:focus {
    outline: none;
  }
`;
