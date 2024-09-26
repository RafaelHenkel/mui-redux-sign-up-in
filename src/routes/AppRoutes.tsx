import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Product from '../pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
