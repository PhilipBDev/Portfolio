import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Summary from "../components/Summary"
import ProjectDisplay from "../components/ProjectDisplay"
import Skills from "../components/SkillBar"
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
      </Helmet>
      <PageStyle>
        <GlobalStyle />
        <Navbar />
        <Summary />
        <Skills />
        <ProjectDisplay />
        <Activity />
        <Contact />
        <Footer />
      </PageStyle>
    </>
  )
}

const PageStyle = styled.div``
