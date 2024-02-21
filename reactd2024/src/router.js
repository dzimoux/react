import {createBrowserRouter, Navigate} from "react-router-dom";
import {Mainlayout} from "./layouts/Mainlayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetails} from "./components/UserDetails";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PostPage";


const router = createBrowserRouter([
        {
            path: '', element: <Mainlayout/>, children: [
                {
                    index: true, element: <Navigate to={'users'}/>
                },
                {
                    path: 'users', element: <UsersPage/>, children: [
                        {
                            path: ':id', element: <UserDetailsPage/>, children: [
                                {
                                    path: 'posts', element: <PostPage/>
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
);


export {
    router
}