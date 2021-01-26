
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer/>     

    </>
  )
}



export default Layout
