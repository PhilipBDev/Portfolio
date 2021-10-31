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
`
const FooterText = styled.p`
  font-weight: 600;
`
