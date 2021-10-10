import React from "react"
import styled from "styled-components"
import { Twitter, Github, LinkedinSquare } from "@styled-icons/boxicons-logos"
import { EmailOutline } from "@styled-icons/evaicons-outline"

const Contact = () => {
  return (
    <Flex id="contact">
      <Title>Connect with me!</Title>
      <Text>
        Whether you want to chat about a potential job or just programming in
        general then send an email my way. You can also reach out to me on
        Twitter or LinkedIn!
      </Text>
      <IconContainer>
        <IconLink href="mailto:PhilipBDev@gmail.com">
          <StyleEmail>
            <EmailOutline size="60px" title="email" /> eMail
          </StyleEmail>
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/philip-brown-83bb131ab/">
          <StyleLinkedIn>
            <LinkedinSquare size="60px" title="LinkedIn" /> LinkedIn
          </StyleLinkedIn>
        </IconLink>
        <IconLink href="https://twitter.com/PhilipBDev">
          <StyleTwitter>
            <Twitter size="60px" title="Twitter" /> Twitter
          </StyleTwitter>
        </IconLink>
        <IconLink href="https://github.com/PhilipBDev">
          <StyleGitHub>
            <Github size="60px" title="GitHub" /> GitHub
          </StyleGitHub>
        </IconLink>
      </IconContainer>
    </Flex>
  )
}

export default Contact

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Flex = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconContainer = styled.div`
  display: flex;
  background-color: #f6f6f6;
  border-radius: 2rem;
  padding: 1rem;
  justify-content: space-between;
  width: 25%;
  margin-top: 1rem;

  @media (max-width: 800px) {
    width: 60%;
  }
`

const IconStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`

const StyleEmail = styled(IconStyle)`
  color: #ff0000;
`
const StyleLinkedIn = styled(IconStyle)`
  color: #0077b5;
`
const StyleTwitter = styled(IconStyle)`
  color: #1da1f2;
`
const StyleGitHub = styled(IconStyle)`
  color: #333;
`

const IconLink = styled.a`
  text-decoration: none;
`

const Title = styled.h1`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`
const Text = styled.p`
  font-size: 24px;
  width: 50%;
  text-align: center;
`
