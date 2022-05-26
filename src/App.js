import React from 'react'
import './App.css'
import { MainDiv } from './styles/Main'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Articles from './components/Articles'

const App = () => {
  return (
    <MainDiv bg="#f8f8f8">
      <Nav/>
      <Header/>
      <About/>
      <Articles/>
    </MainDiv>
  )
}

export default App
