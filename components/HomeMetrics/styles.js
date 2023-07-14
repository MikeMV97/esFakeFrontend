import styled from 'styled-components';

export const HomeMetricsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 250px;
    column-gap: 80px;

    h3 {
        font-size: 48px;
        font-weight: bold;
    }

    p {
        font-size: 24px;
    }
`;

export const MetricDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    
    p {
        font-weight: 18px;
    }
    
`