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
                <Demo>
                  {" "}
                  <Link href={demo} alt="demo">
                    demo
                  </Link>
                </Demo>
                <GitHub>
                  {" "}
                  <Link href={github} alt="GitHub">
                    github
                  </Link>
                </GitHub>
              </p>
              <Hr></Hr>
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
  text-align: center;
  padding-top: 3rem;
  // background-color: #f6f6f6;
`

const ProjectImage = styled(GatsbyImage)`
  height: 320px;
  width: 320px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`
const SingleProjectDiv = styled.div`
  display: flex;
  color: #000;
  height: 85%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
  text-align: center;
`
const ProjectDiv = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: 1fr;
  max-height: 80%;
  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
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

const Demo = styled.button`
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

const Link = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #fff;
`

const GitHub = styled(Demo)`
  margin-left: 1rem;
`

const Title = styled.h1`
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 6rem;
`

const Hr = styled.hr`
  @media (max-width: 850px) {
    margin-top: 4rem;
    width: 75%;
    height: 14px;
    border: 4px ridge light-gray;
    border-radius: 8px;
  }
`
