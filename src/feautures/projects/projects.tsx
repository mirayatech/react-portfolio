/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */

import { Github, Line, Link } from '../../library'
import {
  Grid,
  Card,
  Links,
  Name,
  Language,
  Languages,
  Heading,
} from './project-style'

import projects from './projects.json'

export function Projects() {
  return (
    <div>
      <Heading>
        <h2>
          Projects
          <Line />
        </h2>

        <h3>Stuff I’ve Worked On 📁</h3>
      </Heading>

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
    </div>
  )
}
