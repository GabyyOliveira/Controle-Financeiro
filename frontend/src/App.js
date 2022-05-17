import React from 'react'
import Form from './components/form'
import Navbar from './components/Header'
import Resume from './components/resume'
import GlobalStyle from './styles/global'

const App = () => {
    return(
        <>
            <Navbar />
            <Resume/>
            <Form />
            <GlobalStyle />
        </>
    )
}

export default App