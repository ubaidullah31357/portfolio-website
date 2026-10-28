import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLayout';
import { Home } from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <Navigate to="/#about" replace />,
      },
      {
        path: '/projects',
        element: <Navigate to="/#projects" replace />,
      },
      {
        path: '/experience',
        element: <Navigate to="/#experience" replace />,
      },
      {
        path: '/contact',
        element: <Navigate to="/#contact" replace />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
