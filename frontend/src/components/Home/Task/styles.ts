import styled, {css} from 'styled-components'


export const TaskWrapper = styled.div`
    display: flex;
    align-items: center;

    font-size: .875rem;
    
    width: 100%;
    padding: .5rem 1rem;

    border-radius: 10px;
    box-shadow: 0px 0.5px 1px 0.5px #D9DCE1;
    background-color: white;

    position: relative;

    .iconWrapper {
        display: flex;
        align-items: center;
        
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-20%, -51%);

        padding: 0.4rem;

        border-radius: 5px;
        
        cursor: pointer;
        transition: .5s;
    }

    .iconWrapper:hover {
        background-color: #D5D9DF;
    }
` 