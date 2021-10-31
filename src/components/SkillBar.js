import React from "react"
import styled from "styled-components"
import {
  Html5,
  Css3,
  ReactLogo,
  Nodejs,
  Javascript,
  TailwindCss,
} from "@styled-icons/boxicons-logos"
import { Mongodb, Gatsby, Nextdotjs } from "@styled-icons/simple-icons"

const SkillBar = () => {
  return (
    <SkillContainer>
      <Skills>Skills</Skills>
      <IconContainer>
        <StyleHTML>
          <Html5 size="70px" title="HTML5" />
          HTML5
        </StyleHTML>
        <StyleCSS>
          <Css3 size="70px" title="CSS3" />
          CSS3
        </StyleCSS>
        <StyleJavaScript>
          <Javascript size="70px" title="JavaScript" />
          JavaScript
        </StyleJavaScript>
        <StyleReact>
          <ReactLogo size="70px" title="React" />
          React
        </StyleReact>
        <StyleNode>
          <Nodejs size="70px" title="Node" />
          Node
        </StyleNode>
        <StyleMongo>
          <Mongodb size="70px" title="MongoDB" />
          MongoDB
        </StyleMongo>
        <StyleTailwind>
          <TailwindCss size="70px" title="Tailwind" />
          Tailwind
        </StyleTailwind>
        <StyleNext>
          <Nextdotjs size="70px" title="Next.js" />
          Next.js
        </StyleNext>
        {/* <StyleGatsby>
            <Gatsby size="70px" title="Gatsby" />
            Gatsby
          </StyleGatsby> */}
      </IconContainer>
      <HR></HR>
    </SkillContainer>
  )
}

export default SkillBar

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Skills = styled.h1`
  margin-top: 3rem;
  text-align: center;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 2rem;
  width: 65%;
`

const IconStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`
const StyleHTML = styled(IconStyle)`
  color: #e34f26;
`
const StyleCSS = styled(IconStyle)`
  color: #002561;
`
const StyleJavaScript = styled(IconStyle)`
  color: #f7df1e;
`
const StyleReact = styled(IconStyle)`
  color: #00d8ff;
`
const StyleNode = styled(IconStyle)`
  color: #44883e;
`
const StyleMongo = styled(IconStyle)`
  color: #589636;
  padding-right: 0.5rem;
`
const StyleGatsby = styled(IconStyle)`
  color: #663399;
`
const StyleNext = styled(IconStyle)`
  color: #000;
  padding-right: 0.8rem;
`
const StyleTailwind = styled(IconStyle)`
  color: #03a9f4;
  padding-right: 0.8rem;
`
const HR = styled.hr`
  @media (max-width: 850px) {
    margin-top: 6rem;
    width: 75%;
    border: 4px ridge light-gray;
  }
`
