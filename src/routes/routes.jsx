import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import WantToBuy from "../components/WantToBuy/WantToBuy";
import Register from "../components/Register/Register";
import ChocolateDetailsPage from "../components/ChocolateDetailsPage/ChocolateDetailsPage.jsx";
import PlaceOrder from "../components/PlaceOrder/PlaceOrder.jsx";
import Wishlist from "../components/WishList/Wishlist.jsx";

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
        path: '/wantToBuy',
        element: <WantToBuy />,
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
        element:<PlaceOrder/>
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
