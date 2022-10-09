import { Center, Spinner } from '@chakra-ui/react';
import FullScreenLayout from 'components/layouts/FullScreenLayout';
import { lazy, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Status = lazy(() => import('./Status'));

type RouteLoaderProps = {
  children: ReactNode;
};

const RouteLoader = ({children}: RouteLoaderProps) => {
  return (
    <Suspense
      fallback={
        <Center w="100%" h="100%">
          <Spinner />
        </Center>
      }
    >
      {children}
    </Suspense>
  );
};

const Routers = () => {
  const mainRoutes: RouteObject = {
    path: '/',
    element: <FullScreenLayout />,
    children: [
      {
        path: '/',
        element: (
          <RouteLoader>
            <Home />
          </RouteLoader>
        ),
      },
      {
        path: '/status',
        element: (
          <RouteLoader>
            <Status />
          </RouteLoader>
        ),
      },
    ],
  };
  const routing = useRoutes([mainRoutes]);
  return <>{routing}</>;
};

export default Routers;
