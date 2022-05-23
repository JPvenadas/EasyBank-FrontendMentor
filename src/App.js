import React from 'react'
import './App.css'
import { MainDiv } from './styles/Main'
import Nav from './components/Nav'
import Header from './components/Header'
const App = () => {
  return (
    <MainDiv>
      <Nav/>
      <Header/>
    </MainDiv>
  )
}

export default App
