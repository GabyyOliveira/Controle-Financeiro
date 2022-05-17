import React from "react";
import Card from "../Card";
import * as S from './styles'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

const Resume = () =>{
    return(
        <S.Container>
            <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value="100,00"/>
            <Card title="Saidas" Icon={FaRegArrowAltCircleDown} value="100,00"/>
            <Card title="Total" Icon={FaDollarSign} value="100,00"/>
        </S.Container>
    )
}

export default Resume;