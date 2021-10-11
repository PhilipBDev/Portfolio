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
    <>
      <Helmet>
        <html lang="en" />
        <title>PhilipBDev</title>
        <meta
          name="Philip Brown's Portfolio"
          content="width=device-width, initial-scale=0, maximum-scale=1"
        />
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
    </>
  )
}

const PageStyle = styled.div``
