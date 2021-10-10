import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Summary from "../components/Summary"
import ProjectDisplay from "../components/ProjectDisplay"
import Contact from "../components/Contact"
import Activity from "../components/Activity"
import Footer from "../components/Footer"

import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <SiteContainer>
      <Helmet>
        <html lang="en" />
        <title>PhilipBDev</title>
        <meta name="Philip Brown's Portfolio" />
      </Helmet>
      <PageStyle>
        <GlobalStyle />
        <Navbar />
        <Summary />
        <ProjectDisplay />
        <Activity />
        <Contact />
        <Footer />
      </PageStyle>
    </SiteContainer>
  )
}

const PageStyle = styled.div``

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
