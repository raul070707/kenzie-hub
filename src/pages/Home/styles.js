import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContentUser = styled.div`
    width: 100%;
    height: 130px;
    border: 1px solid var(--grey-3);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        height: 100%;
        width: 80%;
        min-width: 295px;
        max-width: 780px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding: 35px 12px;
    }

    p {
        color: var(--grey-1)
    }

    @media(min-width: 900px){
        height: 120px;

        div {
            width: 780px;
            flex-direction: row;
            padding: 0;
            align-items: center;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 12px;

    section {
        width: 80%;
        min-width: 295px; 
        max-width: 780px;      
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        width: 80%;
        min-width: 295px; 
        max-width: 780px;
        background-color: var(--grey-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 22px 19px;
        border-radius: 4px;
        margin-top: 20px;

        li {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            border-radius: 4px;
            background-color: var(--grey-4);
            margin: 5px 0;
        }

        li:hover {
            background-color: var(--grey-2);
            cursor: pointer;
        }
    }

    @media(min-width: 900px){
        padding: 10px;

        section {
            width: 780px;
        }

        ul {
            width: 780px;
        }
    }
`

export const ModalButton = styled.button`
        background-color: var(--grey-3);
        border-radius: 4px;
        width: 32px;
        height: 32px;
        font-size: 2rem;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    min-width: 295px; 
    max-width: 780px;
    margin: 20px 0;
    text-align: center;
    padding: 0 12px;

    h2 {
        color: var(--color-primary);
        font-size: 1.25rem;
        width: auto;     
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--grey-3);
        border-radius: 4px;
        padding: 12px;
        font-size: 1rem
    }

    @media (min-width: 900px){
        width: 780px;
        padding: 0;
    }
`

