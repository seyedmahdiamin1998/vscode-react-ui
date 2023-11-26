import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'

export default function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-primaryDark-100">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
