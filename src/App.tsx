import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Contacts } from './components/contacts/Contacts'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      {/* <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes> */}
    </div>
  )
}

export default App
