import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$id')({
  component: Blog,
})

function Blog() {
  const {id} = Route.useParams()
  return <div>Hello "/blog/{id}"!</div>
}
