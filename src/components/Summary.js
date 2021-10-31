import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import {
  Html5,
  Css3,
  ReactLogo,
  Nodejs,
  Javascript,
  TailwindCss,
} from "@styled-icons/boxicons-logos"
import { Mongodb, Gatsby, Nextdotjs } from "@styled-icons/simple-icons"

const Summary = () => {
  return (
    <FlexContainer id="about">
      <LeftFlex>
        <Title>Hello, I'm Philip Brown!</Title>
        <Text>
          I'm a self-taught full-stack developer based in Hickory, North
          Carolina. I primarily use React and Node to develop web applications,
          but I'm passionate about developing new skills and learning everything
          the tech world has to offer.
        </Text>
        <Text>
          I also enjoy playing video games, tennis, and spending time with my
          wife and cats!
        </Text>
        <Text>
          <Resume>
            <Link href="http://philiprbrown.com">Resume</Link>
          </Resume>
          <LinkedIn>
            <Link href="https://www.linkedin.com/in/philiprbrown/">
              LinkedIn
            </Link>
          </LinkedIn>
        </Text>
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
          <StyleGatsby>
            <Gatsby size="70px" title="Gatsby" />
            Gatsby
          </StyleGatsby>
        </IconContainer>
      </LeftFlex>
      <RightFlex>
        <ImgContainer>
          <StaticImage
            src="../images/philip-brown.jpg"
            alt="Picture of me"
            style={{
              height: "450px",
              width: "400px",
            }}
          />
        </ImgContainer>
      </RightFlex>
    </FlexContainer>
  )
}

export default Summary

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const RightFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LeftFlex = styled(RightFlex)`
  flex-wrap: wrap;

  // @media (max-width: 850px) {
  //   width: 100%;
  //   margin-top: 1rem;
  //   margin-right: 0;
  // }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ImgContainer = styled.div`
  padding-left: 5rem;
  padding-right: 2rem;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 2rem;
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

const Title = styled.h1`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 50px;
  text-align: center;
`
const Skills = styled.h1`
  margin-top: 3rem;
  text-align: center;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`
const Text = styled.p`
  font-size: 24px;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  color: #000;
`

const Resume = styled.button`
  text-decoration: none;
  background-color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    color: #fff;
    background-color: #a9a9a9;
    cursor: pointer;
  }
`

const LinkedIn = styled(Resume)`
  margin-left: 1rem;
`
