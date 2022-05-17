import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow:  2.5px 2.5px 7.5px #c3c3c3,  -2.5px -2.5px 7.5px #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media(max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    background-color: #fff;
`
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        margin-right: 5px;
        accent-color: #000000;
        margin-top: 0;
    }
`
export const button = styled.button`
    padding: 5px 10px;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    color:white;
    background-image: linear-gradient(to bottom, #8e2de2, #4a00e0);

    
`
