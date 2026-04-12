import { createHashRouter } from "react-router-dom"
import MainLayout from "../layout"
import HomePage from "@/pages/HomePage"
import FavouriteCatsPage from "@/pages/FavouriteCatsPage"
import NotFoundPage from "@/pages/NotFoundPage"

const router = createHashRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '',
            element: <HomePage/>
        },
        {
            path: 'favourites',
            element: <FavouriteCatsPage/>
        },
        {
            path: '*',
            element: <NotFoundPage/>
        },
    ]
    
}])

export default router