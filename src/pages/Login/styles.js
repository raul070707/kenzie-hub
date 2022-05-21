import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        color: var(--color-primary);
        font-size: 1.5rem;
        margin-top: 10px;
    }

    @media(min-width: 900px){
        height: 600px;
    }
`

export const Content = styled.form`
    width: 295px;
    height: 400px;
    padding: 30px 17px;
    border-radius: 4px;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        font-size: 0.5rem;
        font-weight: 600;
        color: var(--grey-1)
    }

    @media(min-width: 900px){
        width: 370px;
        height: 500px;
        padding: 42px 22px;

        p {
            font-size: 0.75rem;
        }
    }
`

export const LinkButton = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: var(--grey-2);
    }

    @media(min-width: 900px){
        height: 48px;
        font-size: 1rem;
    }
`

