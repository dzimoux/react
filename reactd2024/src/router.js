import {createBrowserRouter, Navigate} from "react-router-dom";
import {TodoPage} from "./pages/TodoPage";
import {MainLayout} from "./layouts/MainLayout";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";
import {Posts} from "./pages/Posts";

const router = createBrowserRouter(
    [
        {
            path: '', element: <MainLayout/>, children: [
                {index: true, element: <Navigate to={'todos'}/>},
                {
                    path: 'todos', element: <TodoPage/>
                },
                {
                    path: 'albums', element: <AlbumsPage/>
                },
                {
                    path: 'comments', element: <CommentsPage/>, children: [
                        {
                            path: 'posts', element: <Posts/>
                        }
                    ]
                }
            ]
        }
    ]
)

export {
    router
}