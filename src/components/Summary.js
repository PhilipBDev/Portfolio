import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

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

  @media (max-width: 850px) {
    width: 100%;
    margin-top: 1rem;
    margin-right: 0;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 6rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ImgContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 2rem;
  }
`

const Title = styled.h1`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 50px;
  text-align: center;
`

const Text = styled.p`
  font-size: 24px;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
`

const Resume = styled.button`
  text-decoration: none;
  background-color: #187bcd;
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
