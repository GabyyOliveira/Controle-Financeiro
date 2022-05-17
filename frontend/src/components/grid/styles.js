import styled from "styled-components";

export const Table = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow:  2.5px 2.5px 7.5px #c3c3c3,  -2.5px -2.5px 7.5px #ffffff;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`
export const Thead = styled.thead``;

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")}`