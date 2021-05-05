import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.red};
    height: 200px;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: ${props => props.theme.white};
        font-size: 21px;
        font-weight: bold;
    }
`