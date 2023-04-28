import styled, { css } from 'styled-components'


export const LoginContainer = styled.div`

    min-width: 450px;
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    padding: 2rem;
    border: 1px solid #A3AFA7;
    border-radius: 10px;
    background-color: white;
    
    .title {
        width: 90%;
        margin: 1rem auto;
    }
    .subtitle {
        margin-bottom: .5rem;
        font-size: 1.3rem;
        font-weight: 700;
    }
    
    .description {
        margin-bottom: 1.5rem;
        font-size: 0.8rem;
        font-weight: 300;
    }
    

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0rem;
        width: 100%;
    }
    
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 90%;
        margin-bottom: 0.7rem;
    }

    .inputs label {
        font-size: .7rem;
    }

    .inputs input {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 5px;
        border: 1px solid #A3AFA7;
        font-size: 0.7rem;
    }

    #buttonSubmit {
        width: 90%;
        padding-block: .7rem;
        border-radius: 10px;
        border: none;
        background-color: #53846A;
        color: white;
        margin: 1rem 0 2rem 0;
        cursor: pointer;
        transition: .5s;
    }

    #buttonSubmit:hover {
        background-color: #361542;
    }

    .text-login {
        text-align: center;
        font-size: 0.8rem;
    }

    .text-login span {
        color: #53846A;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;
    }

    
    .text-login span:hover {
        color: #361542;
    }

`