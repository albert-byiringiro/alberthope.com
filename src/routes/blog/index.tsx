import { createFileRoute, Link } from '@tanstack/react-router';

import { fetchPosts, getRandomPosts } from '../../api/blog';

export const Route = createFileRoute('/blog/')({
  component: PokemonList,
  loader: fetchPosts,
});

function PokemonList() {
  const posts = Route.useLoaderData();
  const randomPosts = getRandomPosts(posts, 5);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Blog</h1>
        <ul>
          {randomPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link
                to={`/blog/$id`}
                params={{ id: `${post.id}` }}
                className="text-blue-500 hover:underline"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </Link>
              <p className="text-gray-700">{post.body}</p>
              <p className="text-sm text-gray-500">{post.id}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
