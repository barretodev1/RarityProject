import { useState } from 'react'
import './App.css'
import { MeuHeader } from '../components/header'
import { MeuMain } from '../components/main'
import { MeuAbout } from '../components/about'
import { MeuServices } from '../components/serviço'

function App() {

  return (
    <>
    <MeuHeader />
    <MeuMain />
    <MeuAbout />
    <MeuServices />
    </>
  )
}

export default App
