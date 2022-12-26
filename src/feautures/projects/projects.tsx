/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */

import { Github, Link } from '../../library'
import { Headings } from '../headings/headings'
import {
  Grid,
  Card,
  Links,
  Name,
  Language,
  Languages,
  Container,
} from './project-style'

import projects from './projects.json'

export function Projects() {
  const title = 'Projects'
  const subtitle = 'Stuff I’ve Worked On'

  return (
    <Container>
      <Headings title={title} subtitle={subtitle} />

      <Grid>
        {projects.map((project) => (
          <Card key={project.title}>
            <Links>
              <a target={'_blank'} href={project.githubUrl} rel="noreferrer">
                <Github />
              </a>
              <a target={'_blank'} href={project.externalUrl} rel="noreferrer">
                <Link />
              </a>
            </Links>

            <Name>{project.title}</Name>

            <Languages>
              {project.languages.map((language) => (
                <Language key={language}>{language}</Language>
              ))}
            </Languages>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}
