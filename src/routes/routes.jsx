import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import WantToBuy from "../components/WantToBuy/WantToBuy";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children: [
        {
            path:'/',
        element: <Home/>
        },
        {
            path:'/shop',
            element: <Shop/>
        },
        {
            path:'/wantToBuy',
            element: <WantToBuy/>
        }
    ]
  }
]);
export default router