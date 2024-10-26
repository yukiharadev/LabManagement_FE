import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children:[
        ]
    }
]);


export default router;