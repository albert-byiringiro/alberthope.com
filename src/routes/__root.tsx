import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="container w-full max-w-2xl px-8 py-8 mx-auto min-h-screen flex flex-col">
      <header>
        <nav className="flex items-baseline justify-between flex-col sm:flex-row sm:space-y-0 space-y-1">
          <Link to="/" className="text-3xl font-normal">
            Albert Byiringiro
          </Link>
          <ul className="flex space-x-4 text-xs item-center">
            <li>
              <Link
                to="/"
                className="[&.active]:font-bold text-sm transition-colors  hover:text-neutral-600 underline-offset-2 decoration-neutral-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="[&.active]:font-bold text-sm transition-colors  hover:text-neutral-600 underline-offset-2 decoration-neutral-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/reading"
                className="[&.active]:font-bold text-sm transition-colors  hover:text-neutral-600 underline-offset-2 decoration-neutral-400"
              >
                Reading
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="[&.active]:font-bold text-sm transition-colors  hover:text-neutral-600 underline-offset-2 decoration-neutral-400"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="[&.active]:font-bold text-sm transition-colors  hover:text-neutral-600 underline-offset-2 decoration-neutral-400"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main className="my-8 grow">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  );
}
