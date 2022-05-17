import React, { useState } from "react";
import Grid from "../grid";
import * as C from './styles'

const Form = ({handleAdd, transactionsList, setTransactionsList}) =>{
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    const generateId = () => Math.round(Math.random() * 1000)

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor!")
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo")
            return;
        }

        const transaction ={
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense
        }

        handleAdd(transaction);

        setDesc("")
        setAmount("")

    }

    return(
        <>
        <C.Container>
            <C.InputContent>
                <C.label>Descrição</C.label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}></C.Input>
            </C.InputContent>
            <C.InputContent>
                <C.label>Valor</C.label>
                <C.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)}></C.Input>
            </C.InputContent>
            <C.RadioGroup>
                <C.Input type="radio" id="rIncome" defaultChecked name="group1" onChange={() =>setExpense(!isExpense)}></C.Input>
                <C.label htmlFor="rIncome">Entrada</C.label>
                <C.Input type="radio" id="rExpenses" name="group1" onChange={() =>setExpense(!isExpense)}></C.Input>
                <C.label htmlFor="rExpenses">Saida</C.label>
            </C.RadioGroup>
            <C.button onClick={handleSave}>ADICIONAR</C.button>
        </C.Container>
        <Grid itens={transactionsList} setItens={setTransactionsList}></Grid>
        </>
    )
}

export default Form;