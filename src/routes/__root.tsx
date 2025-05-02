import { Outlet, createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/blog" className="[&.active]:font-bold">
          Blog
        </Link>{' '}
        <Link to="/reading" className="[&.active]:font-bold">
          Reading
        </Link>{' '}
        <Link to="/work" className="[&.active]:font-bold">
          Work
        </Link>{' '}
        <Link
          to="/services"
          activeProps={{
            style: {
              fontWeight: 'bold',
            },
          }}
        >
          Services
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
