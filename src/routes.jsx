import { createBrowserRouter } from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
    { path: '/', element: <App /> },
    // { path: '/cart', element: <Cart /> },
])

export default router;