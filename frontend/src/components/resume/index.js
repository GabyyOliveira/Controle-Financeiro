import React from "react";
import Card from "../Card";
import * as S from './styles'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign} from 'react-icons/fa'

const Resume = ({income, expense, total}) =>{
    return(
        <S.Container>
            <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <Card title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <Card title="Total" Icon={FaDollarSign} value={total}/>
        </S.Container>
    )
}

export default Resume;