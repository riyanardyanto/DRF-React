import React from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div>
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default App
