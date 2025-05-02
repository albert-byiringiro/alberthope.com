import { createFileRoute } from '@tanstack/react-router';

import { fetchPost } from '../../api/blog';

export const Route = createFileRoute('/blog/$id')({
  component: Blog,
  loader: async ({ params }) => await fetchPost(+params.id),
});

function Blog() {
  const { id } = Route.useParams();
  const post = Route.useLoaderData();
  console.log(post);
  return (
    <div className="p-3">
      <h1 className="text-md font-bold">{post?.title}</h1>
      <p>{post?.body}</p>
      <small>User ID: {post?.userId}</small>
    </div>
  );
}
