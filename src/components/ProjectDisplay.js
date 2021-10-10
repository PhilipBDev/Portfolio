import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProjectDisplay = () => {
  const data = useStaticQuery(graphql`
    query ProjectsPage {
      site {
        siteMetadata {
          title
          email
          description
          copyright
        }
      }
      projects: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            demo
            description
            tools
            github
            title
            slug
            thumb {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.projects.nodes
  console.log(projects)

  return (
    <ProjectContainer>
      <Title id="projects">Projects</Title>
      <ProjectDiv>
        {projects.map(project => {
          const { thumb, description, demo, github, title, tools } =
            project.frontmatter
          const image = getImage(thumb)
          return (
            <SingleProjectDiv>
              <a href={demo}>
                <ProjectImage
                  image={image}
                  alt="project picture"
                  placeholder="project picture"
                />
              </a>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <ProjectDescription>{tools}</ProjectDescription>
              <p>
                <Links href={demo} alt="demo">
                  demo
                </Links>{" "}
                /{" "}
                <Links href={github} alt="GitHub">
                  github
                </Links>
              </p>
            </SingleProjectDiv>
          )
        })}
      </ProjectDiv>
    </ProjectContainer>
  )
}

export default ProjectDisplay

//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
`

const ProjectImage = styled(GatsbyImage)`
  height: 320px;
  width: 320px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`
const SingleProjectDiv = styled.div`
  display: flex;
  background-color: #f6f6f6;
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
  border: 1px solid #fff;
  color: #000;
  width: 85%;
  height: 85%;
  border-radius: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  text-align: center;
  min-height: 90vh;

  @media (max-width: 850px) {
    width: 90%;
    height: 90%;
    min-height: 100vh;
  }
`
const ProjectDiv = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  max-height: 80%;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`
const ProjectTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
`

const ProjectDescription = styled.p`
  font-size: 17px;
  width: 90%;
`

const Links = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: blue;
  }
`
const Title = styled.h1`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 4rem;
`
