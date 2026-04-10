import { RouterProvider } from "react-router-dom"
import router from "../router"


const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
       <> 
         <RouterProvider router={router}/>
         {children}
       </> 
    )
}

export default AppProviders
