import styled from "styled-components";

export const StyledMetric = styled.div`
  display: flex;
  align-items: center;

  .block {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background: ${(props) => props.theme.pastelPink};
  }

  p {
    font-weight: bold;
    font-size: 24px;
    margin: 0px;
  }
`;
