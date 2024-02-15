import {createBrowserRouter} from "react-router-dom";
import {TodoPage} from "./pages/TodoPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter(
    [
        {
            path:'', element:<MainLayout/>,children:[
                {
                    path:'todos', element: <TodoPage/>
                }
            ]
        }
    ]
)

export {
    router
}