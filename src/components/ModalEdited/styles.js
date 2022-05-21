import styled from "styled-components";

export const Content = styled.div`
    width: 295px;
    height: 275px;
    position: absolute;
    top: calc(50vh - 137.5px);
    left: calc(50% - 147.5px);
    display: flex;
    flex-direction: column;
    background: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 1000;

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
        top: calc(50vh - 175px);
        left: calc(50% - 185px);
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

export const SectionButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        width: 78px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 22px;
        border: 1px solid var(--grey-1);
        border-radius: 4px;
        background-color: var(--grey-1);
        font-size: 0.75rem;

        &:hover {
            background-color: var(--grey-2);
            cursor: pointer
        }
    }

    @media(min-width: 900px){
        div {
            width: 98px;
            height: 48px;
            font-size: 1rem;
        }
    }
`

export const InputFake = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
        width: 100%;
        height: 38px;
        padding: 0 16px;
        background-color: var(--grey-2);
        border: 1px solid var(--grey-0);
        border-radius: 4px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 0.75rem;
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
        margin-bottom: 8px;
    }

    @media(min-width: 900px){
        div{
            font-size: 1rem;
            height: 48px;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const EditedButton = styled.button`
        width: 163px;
        height: 38px;
        padding: 0 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: 1px solid var(--color-primary-negative);
        background-color: var(--color-primary-negative);
        font-size: 0.75rem;

        &:hover {
            background: var(--color-primary);
            border: 1px solid var(--color-primary);
        }

        @media(min-width: 900px){
            width: 204px;
            height: 48px;
            font-size: 1rem;
        }
`