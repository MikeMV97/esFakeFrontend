import styled from 'styled-components';

export const DynamicPlotGrid = styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    padding-left: 30px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
`;

export const LabelsGrid = styled.div`
    width: 100%;
    display: grid;
    padding-left: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    p {
        text-align: center;
    }
`;
