import styled from 'styled-components'

export const ContentPopoverWrapper = styled.div`
    width: 200px;
    border-radius: 8px;
    overflow: hidden;

    padding: 0 0 .5rem 0;
    background-color: var(--background-color-secundary);


    
    .popoverHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 95%;
        margin: auto;

        border-bottom: 1px solid var(--background-color-terciary);
        position: relative;

        padding: 1.2rem 0rem;
    }

    .popoverClose {
        cursor: pointer;
        position: absolute;

        right: 0;
        transform: translate(-20%, 0);
    }

    .popoverContent {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: .2rem;
    }

    .popoverOption {
        background-color: var(--background-color-secundary);
        padding: 0.5rem;
        width: 100%;
        text-align: left;

        cursor: pointer;
        border: none;
    }

    .popoverOption:hover {
        background-color: var(--background-color-terciary);
    }

`