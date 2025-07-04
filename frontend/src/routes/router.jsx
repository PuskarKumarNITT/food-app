import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]

    }, {
        path: "*",
        element: <Errorpage />
    }
])

export default router;