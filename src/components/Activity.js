import React from "react"
import styled from "styled-components"

const Activity = () => {
  let newImg =
    "https://ghchart.rshah.org/8c6445/PhilipBDev?t=" + new Date().getTime()

  return (
    <Flex id="about">
      <Title>GitHub Contributions</Title>
      <a href="https://github.com/PhilipBDev">
        <ImageContainer
          src={newImg}
          alt="Philip Brown's GitHub"
        ></ImageContainer>
      </a>
    </Flex>
  )
}

export default Activity

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding-top: 2.5rem;
  // padding-bottom: 2.5rem;
  text-align: center;
`

const ImageContainer = styled.img`
  border: 1px solid #fff;

  cursor: pointer;
  width: 950px;
  height: 100%;

  @media (max-width: 850px) {
    width: 500px;
  }
`
const Title = styled.h2`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`
