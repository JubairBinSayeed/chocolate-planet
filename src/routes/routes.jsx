import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Register from "../components/Register/Register";
import ChocolateDetailsPage from "../components/ChocolateDetailsPage/ChocolateDetailsPage.jsx";
import Wishlist from "../components/WishList/Wishlist.jsx";
import AddToCart from "../components/AddToCart/AddToCart.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/shop/:id',
        element: <ChocolateDetailsPage />,
        loader: async () => {
          const response = await fetch('/chocolate.json');
          if (!response.ok) {
            throw new Error('Failed to fetch chocolates');
          }
          const data = await response.json();
          return data.chocolates; 
        },
      },
      {
        path:'/addToCart',
        element:<AddToCart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>,
        loader: async () => {
          const response = await fetch('/chocolate.json');
          if (!response.ok) {
            throw new Error('Failed to fetch chocolates');
          }
          const data = await response.json();
          return data.chocolates; 
        }
      }
    ],
  },
]);

export default router;
