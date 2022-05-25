import React from 'react'
import './App.css'
import { MainDiv } from './styles/Main'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <MainDiv bg="#fff">
      <Nav/>
      <Header/>
      <About/>
    </MainDiv>
  )
}

export default App
