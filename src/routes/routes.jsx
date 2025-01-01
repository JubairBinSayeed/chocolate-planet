import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div className="text-center font-bold text-2xl underline my-10">Hello World!</div>  
  }
]);
export default router