import styled from "styled-components";

export const Container = styled.div`
    width: 100%
    height: 100vh;
    background-color: rgba(18,18,20, 0.5);
    position: absolute;
    top: calc(50vh - 147.5px);
    left: calc(50% - 137.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media(min-width: 900px){
        top: calc(50vh - 175px);
        left: calc(50% - 185px);
    }
`

export const Content = styled.div`
    width: 295px;
    height: 275px;
    display: flex;
    flex-direction: column;
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 20px 20px;
    }

    @media(min-width: 900px) {
        width: 370px;
        height: 350px;    
    }
`

export const HeaderModal = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background: var(--grey-2);
    border-radius: 4px 4px 0px 0px;

    h3 {
        font-size: 11px;
    }

    button {
        width: 32px;
        height: 32px;
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &:before,
        &:after {
            content: ' ';
            position: absolute;
            width: 2.5px;
            height: 20px;
            background-color: var(--grey-1);
        }

        &:before {
            transform: rotate(45deg)
        }

        &:after {
            transform: rotate(-45deg)
        }

        &:before:hover,
        &:after:hover {
            background-color: var(--grey-0)
        }
    }

    @media(min-width: 900px){
        height: 50px;

        h3 {
            font-size: 14px;
        }
    }
`