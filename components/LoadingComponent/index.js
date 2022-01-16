import styled, { keyframes } from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 60%;

  p {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${props => props.theme.lightCoral};
  }
`;


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${props => props.theme.lightCoral};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.lightCoral} transparent transparent transparent;
  }
  div:nth-child(1) {
  animation-delay: -0.45s;
  }
  div:nth-child(2) {
  animation-delay: -0.3s;
  }
  div:nth-child(3) {
  animation-delay: -0.15s;
  }
`;


export const LoadingComponent = ({ message }) => {
    return (
        <FlexContainer>
            <p>{message}</p>
            <LoaderContainer><div></div><div></div><div></div><div></div></LoaderContainer>
        </FlexContainer>
    )
}