import styled from 'styled-components'

export const DesktopWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   height: calc(100% - 80px);
   padding: 1rem;

   overflow-x: auto;
   background-color: green;

   ::-webkit-scrollbar {
        height: 10px;
        width: 5px;
        background-color: #f5f5f5;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`