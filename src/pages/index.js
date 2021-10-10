import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Summary from "../components/Summary"
import ProjectDisplay from "../components/ProjectDisplay"
import Contact from "../components/Contact"
import Activity from "../components/Activity"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <PageStyle>
      <GlobalStyle />
      <Navbar />
      <Summary />
      <ProjectDisplay />
      <Activity />
      <Contact />

      <Footer />
    </PageStyle>
  )
}

const PageStyle = styled.div``
