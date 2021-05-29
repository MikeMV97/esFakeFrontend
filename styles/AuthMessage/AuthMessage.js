import styled from 'styled-components';

export const AuthMessage = styled.div`
    max-width: 100%;
    background-color: ${props => props.theme.lightCoral};
    padding: 8rem 6rem;
    height: calc(100vh - 16rem);
    
    p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.white};
    }

    .message {
        font-family: 'Proza Libre', sans-serif;
        font-size: 80px;
        font-weight: bold;
        text-align: right;
    }

    .author { 
        width: 100%;
        font-size: 36px;
        text-align: right;
        margin-top: 3rem;
    }
`;
