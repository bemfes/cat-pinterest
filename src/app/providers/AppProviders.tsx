import { RouterProvider } from "react-router-dom"
import router from "../router"
import FavouriteCatsContextProvider from "@/features/chooseFavourite/model"


const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
       <FavouriteCatsContextProvider> 
         <RouterProvider router={router}/>
         {children}
       </FavouriteCatsContextProvider> 
    )
}

export default AppProviders
