import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.form`
    width: 295px;
    height: 570px;
    padding: 30px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--grey-3);
    border-radius: 4px;
    box-shadow: 0 4px 40px -10px rgba(0, 0, 0, 0.25);

    p {
        color: var(--grey-1);
        font-size: 0.5rem;
    }

    h2 {
        font-size: 14px
    }

    @media (min-width: 900px) {
        width: 370px;
        height: 800px;
        padding: 42px 22px;

        p {
            font-size: 0.75rem;
        }

        h2 {
            font-size: 18px
        }
    }
`