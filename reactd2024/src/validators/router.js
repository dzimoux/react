import {createBrowserRouter, Navigate} from "react-router-dom";
import {Mainlayout} from "../layouts/Mainlayout";
import {EpisodesPage} from "../pages/EpisodesPage";
import {CharactersPage} from "../pages/CharactersPage";


const router = createBrowserRouter([
    {
        path: '', element: <Mainlayout/>, children: [
            {
                index: true, element: <Navigate to={'episode'}/>
            },
            {
                path: 'episode', element: <EpisodesPage/>
            },
            {
                path: 'character/:id', element: <CharactersPage/>
            }

        ]
    }


])

export {
    router
}