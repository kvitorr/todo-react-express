import styled, { css } from 'styled-components'


export const ListWrapper = styled.div`
    width: 300px;   
    border-radius: 10px;
    padding: 0.5rem 0.3rem;
    box-shadow: 0px 0px 2px 0px gray;
    flex-shrink: 0;
    background-color: #F7F8F9;   

    max-height: 100%;

    .listHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        font-weight: 500;

        padding: 0.5rem 1rem 1rem 1rem;
    }

    .listDos {
        display: flex;
        flex-direction: column;
        
        gap: 0.5rem;
        padding-inline: 0.3rem;
        
        max-height: 510px;
        
        overflow-y: scroll;
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

    .buttonAddNewTask {
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

    .buttonAddNewTask:hover {
        background-color: #D5D9DF;
    }
`