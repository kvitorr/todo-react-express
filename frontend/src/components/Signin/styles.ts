import styled, { css } from 'styled-components'


export const LoginContainer = styled.div`
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
    padding: 2rem;
    border: 1px solid #A3AFA7;
    border-radius: 10px;
    background-color: white;
    max-width: 400px;
    width: 100%;
    margin: 1rem;

    
    .title {
        width: 100%;
        margin: 1rem auto;
        text-align: center;
    }
    .subtitle {
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
    }
    
    .description {
        font-size: 0.8rem;
        font-weight: 300;
    }
    

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        width: 100%;
    }
    
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0rem;
        width: 100%;
    }

    .inputs label {
        font-size: .7rem;
    }

    .inputs input {
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 5px;
        border: 1px solid #BBC4D9;
        font-size: 0.7rem;
    }

    .errorMessage {
        font-size: 0.7rem;
        max-width: 400px;
        color: red;
    }

    #buttonSubmit {
        width: 100%;
        padding-block: .7rem;
        border-radius: 10px;
        border: none;
        background-color: #071A84;
        color: white;
        cursor: pointer;
        transition: .5s;
        margin-top: .5rem;
    }

    #buttonSubmit:hover {
        background-color: #361542;
    }

    .text-login {
        text-align: center;
        font-size: 0.8rem;
        margin-top: 1rem;
    }

    .text-login span {
        color: #071A84;
        font-weight: 700;
        cursor: pointer;
        transition: .5s;
    }

    
    .text-login span:hover {
        color: #361542;
    }

`