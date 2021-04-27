import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.secondary ? props.theme.lightCoral : props.theme.white};
    color: ${props => props.secondary ? props.theme.white : props.theme.lightCoral};
    border: none;
    min-width: 142px;
    height: 36px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`;
