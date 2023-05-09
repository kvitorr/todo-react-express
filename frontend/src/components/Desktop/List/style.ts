import styled, { css } from 'styled-components'


export const ListWrapper = styled.div`
    width: 300px;   
    border-radius: 10px;
    padding: 0.5rem 0.3rem;
    box-shadow: 0px 0px 2px 0px gray;
    flex-shrink: 0;
    background-color: #F7F8F9;   

    max-height: 100%;

    display: flex;
    flex-direction: column;

    .listHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 500;

        gap: .5rem;

        padding: 0.5rem 1rem 1rem 1rem;
    }

    .listHeader > p {
        word-wrap: break-word;
        width: 240px;
    }

    .listDos {
        display: flex;
        flex-direction: column;
        
        gap: 0.5rem;
        padding-inline: 0.3rem;
                
        overflow-y: scroll;
        scroll-margin-bottom: 9999px;
        scroll-padding-bottom: 0;
    }


    .listDos::-webkit-scrollbar {
        width: 7px;
        background-color: #f5f5f5;
        border-radius: 10px;
    }

    .listDos::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
    }

    .listDos::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    .buttonAddNewCard {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem 1rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        border-radius: 10px;
        border: 0px;
        background-color: whitesmoke;
        transition: 0.5ms;

        position: relative;
        cursor: pointer;
    }

    .buttonAddNewCard:hover {
        background-color: #D5D9DF;
    }

    .wrapperNewTask {
        display: flex;
        flex-direction: column;
    }
    
    .inputNewTask {
        padding: .5rem 1rem;
    
        border-radius: 10px;
        border: none;
        box-shadow: 0px 0.5px 1px 0.5px var(--box-shadow-color);
        background-color: var(--background-color-secundary);

        overflow: hidden;
        resize: none;
        height: auto;
    }

    .inputNewTask:focus {
        outline: none;
    }

    .wrapperButtons {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .wrapperButtons > * {
        cursor: pointer;
    }

    .buttonAddNewTask {
        background-color: blueviolet;
        padding: 0.5rem;
        width: 50%;
        border-radius: 5px;
        border: none;

        color: white;
    }


`