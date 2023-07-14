import styled, { keyframes } from "styled-components";

const grow = keyframes`
  from {
    transform: scaleY(0);
    height: 0%;
  }

  to {
    transform: scaleY(1);
  }
`;

const defineHeight = (props) => {
  let value = props.heightSize + "%";
  return value || "100%";
};

export const BarPlotComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  .bar {
    width: 100%;
    height: ${(props) => defineHeight(props)};
    background-color: ${(props) => props.theme.lightCoral};
    animation: ${grow} 1s ease-out;
  }
`;
