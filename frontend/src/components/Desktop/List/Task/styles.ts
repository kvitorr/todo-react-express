import styled, {css} from 'styled-components'


export const TaskWrapper = styled.div`
    display: flex;
    align-items: center;

    font-size: .875rem;
    
    width: 100%;
    padding: .5rem 1rem;

    border-radius: 10px;
    box-shadow: 0px 0.5px 1px 0.5px var(--box-shadow-color);
    background-color: var(--background-color-secundary);

    position: relative;

    .description {
        max-width: 96%;
        word-wrap: break-word;
    }

    .inputTask {
        border: none;
        width: 95%;
        outline: none;
        resize: none;
    }

    .iconWrapper {
        display: flex;
        align-items: center;
        
        position: absolute;
        right: 0;
        top: 0;

        transform: translate(-10%, 5%);

        padding: 0.4rem;

        border-radius: 5px;
        
        cursor: pointer;
        transition: .5s;
    }

    .iconWrapper:hover {
        background-color: rgba(213, 217, 223, 0.5);
    }
` 

export const TextAreaWrapper = styled.div`
    display: flex;
    align-items: center;

    font-size: .875rem;
    
    width: 100%;
    padding: .5rem 1rem;

    border-radius: 10px;
    box-shadow: 0px 0.5px 1px 0.5px var(--box-shadow-color);
    background-color: var(--background-color-secundary);

    position: relative;

    .inputTask {
        border: none;
        width: 95%;
        outline: none;
        resize: none;
    }

    .iconWrapper {
        display: flex;
        align-items: center;
        
        position: absolute;
        right: 0;
        top: 0;

        transform: translate(-10%, 5%);

        padding: 0.4rem;

        border-radius: 5px;
        
        cursor: pointer;
        transition: .5s;
    }

    .iconWrapper:hover {
        background-color: rgba(213, 217, 223, 0.5);
    }
` 

export const WrapperButtons = styled.div`

    display: flex;
    align-items: center;
    gap: 0.5rem;

     > * {
        cursor: pointer;
    }

    .buttonAddNewTask {
        background-color: blueviolet;
        padding: 0.5rem;
        width: 50%;
        border-radius: 5px;
        border: none;

        color: white;

        margin-top: 0.1rem;
        transition: .5s;
    }

    .buttonDeleteTask {
        background-color: #FF4136;
        padding: 0.5rem;
        width: 30%;
        border-radius: 5px;
        border: none;
        color: white;
        margin-top: 0.1rem;
        transition: .5s;
    }

    .buttonAddNewTask:hover {
        background-color: #9932CC

;
    }

    .buttonDeleteTask:hover {
        background-color: #E71D36;
    }
    
`
