import styled from 'styled-components'

export const ListButtonWrapper = styled.div`
    width: 260px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 0px;
    background-color: whitesmoke;
    transition: 0.5ms;
    overflow: hidden;

    .buttonWrapper {
        width: 100%;
        border: none;
        background-color: transparent;
    }
    
    .buttonContent {
        padding: 1rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    
        position: relative;
        cursor: pointer;

    }
        

    .buttonContent:hover {

        background-color: #D5D9DF;
    }
`

export const ListInputWrapper = styled.div`
    width: 100%;

    padding: 1rem .5rem;

    .wrapperNewTask {
        display: flex;
        flex-direction: column;
    }

    .title {
        text-align: left;
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
    }
    
    .inputNewTask {
        padding: .5rem 1rem;
        width: 100%;
    
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
        margin-top: .5rem;
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