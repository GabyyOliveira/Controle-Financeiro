import styled from "styled-components";

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px 15px;
    width: 30%;
    // border: 1px solid gray;
    box-shadow:  1.5px 1.05px 5.5px #c3c3c3,  -1.5px -0.05px 6.5px #c3c3c3;

    :hover{
        color: black;

        box-shadow: inset 10px 10px 30px #c3c3c3, inset -10px -10px 30px #ffffff;

        header{
            font-weight: bold;
        }
    }
    @media (max-width: 750px){
        width: 20%;
        p{
            font-size: 12px;
        }

        span{
            font-size: 20px;
        }

        svg{
            display:none
        }
    }   
    
`;

export const Header = styled.header`
    display: flex;
    align-items:center;
    justify-content:space-around;
    width: 100%;
    gap: 10px;
    margin: 20px;
    

    svg{
        width:25px;
        height: 25px;
        color: #4a00e0;
    }

`;

export const headerTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`