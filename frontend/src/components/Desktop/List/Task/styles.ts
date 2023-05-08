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
        max-width: 100%;
        word-wrap: break-word;
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
        background-color: #D5D9DF;
    }
` 