import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 295px;
    margin: 20px 0;
    text-align: center;

    h1 {
        color: var(--color-primary);
        font-size: 1rem;
        width: auto;     
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--grey-3);
        border-radius: 4px;
        padding: 12px;
        font-size: 0.5rem
    }

    @media (min-width: 900px) {
        width: 370px;

        h1 {
            font-size: 1.25rem;
        }

        button {
            font-size: 1rem
        }
    }
`