import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout"
import HomePage from "@/pages/HomePage"
import FavouriteCatsPage from "@/pages/FavouriteCatsPage"
import NotFoundPage from "@/pages/NotFoundPage"

const router = createBrowserRouter([{
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
    
}], {
  basename: "/cat-pinterest/",
})

export default router