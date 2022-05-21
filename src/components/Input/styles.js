import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
        width: 100%;
        height: 38px;
        padding: 0 12px;
        background-color: var(--grey-2);
        border: 1px solid ${prop => prop.border ? prop.border : 'var(--grey-2)'};
        border-radius: 4px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--grey-0);

        ${prop => prop.isErrored && css`
            border: 1px solid var(--negative)
        `}
    }

    label {
        font-size: 0.75rem;
        font-weight: 400;
        margin: 6px 0 3px 0;

        span{
            color: var(--negative)
        }
    }

    @media (min-width: 900px){

        input {
            height: 48px;
            padding: 0 16px;
            font-size: 1rem;
        }
        
        label {
            font-size: 1rem;
            margin: 8px 0 4px 0;
        }
    }
`