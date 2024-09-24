import { useState } from 'react'
import './App.css'
import { MeuHeader } from '../components/header'
import { MeuMain } from '../components/main'
import { MeuAbout } from '../components/about'

function App() {

  return (
    <>
    <MeuHeader />
    <MeuMain />
    <MeuAbout />
    </>
  )
}

export default App
