import styled from "styled-components";

export const ContentButton = styled.button`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${prop => prop.bgColor ? prop.bgColor : 'var(--color-primary)'};
    border: 1px solid ${prop => prop.bgColor ? prop.bgColor : 'var(--color-primary)'};
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 8px;

    &:hover {
        background-color: ${prop => prop.bgFocus}
    }

    @media (min-width: 900px){
        height: 48px;
        font-size: 1rem
    }
`