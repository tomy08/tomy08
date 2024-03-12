import { Card, CardBody } from '@nextui-org/react'
import ProjectCard from './ProjectCard'
import { useProjectsTranslated } from '../utils/projectsTranslated'

export default function Proyects() {
  const projects = useProjectsTranslated()
  return (
    <Card>
      <CardBody className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {Object.entries(projects).map(([key, value]) => (
          <ProjectCard
            key={key}
            cards={value.cards}
            containerClassName={value.containerClassName}
            technologies={value.technologies}
          />
        ))}
      </CardBody>
    </Card>
  )
}
