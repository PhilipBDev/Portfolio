import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Flex>
      <FooterText>Copyright © 2021 - Philip Brown</FooterText>
    </Flex>
  )
}

export default Footer

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Flex = styled.footer`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#2a9df4, #187bcd);
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`
const FooterText = styled.p`
  font-weight: 600;
`
