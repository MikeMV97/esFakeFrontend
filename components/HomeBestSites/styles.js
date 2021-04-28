import styled from 'styled-components';

export const GridBestSites = styled.div`
    margin-top: 250px;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 80px;

    h3 {
        font-size: 3.5rem;
    }

    p {
        font-size: 24px;
    }
`

export const ProgressWrapper = styled.div`
    margin-top: 100px;
`

export const ProgressItem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 70%;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 21px;
    }

`

export const ProgressBar = styled.div`
    width: ${props => props.width || "100%"};
    background-color: ${props => props.theme.lightCoral};
    height: 20px;
    border-radius: 10px;
`

