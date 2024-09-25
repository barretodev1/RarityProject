import { useState } from 'react'
import './App.css'
import { MeuHeader } from '../components/header'
import { MeuMain } from '../components/main'
import { MeuAbout } from '../components/about'
import { MeuServices } from '../components/serviço'
import { MeuBudget } from '../components/budget'
import { MeuContact } from '../components/contact'

function App() {

  return (
    <>
    <MeuHeader />
    <MeuMain />
    <MeuAbout />
    <MeuServices />
    <MeuBudget />
    <MeuContact />
    </>
  )
}

export default App
