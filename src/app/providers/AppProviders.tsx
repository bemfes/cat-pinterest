import FavouriteCatsContextProvider from "@/features/chooseFavourite/model"
import { ErrorBoundary } from "react-error-boundary"
import Placeholder from "@/shared/ui/Placeholder"


const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
       <ErrorBoundary fallback={<Placeholder to={ '/' } linkText="Вернуться к котикам 😸" text="Похоже, что-то пошло не так..."/>}>
         <FavouriteCatsContextProvider> 
           {children}
         </FavouriteCatsContextProvider> 
       </ErrorBoundary>
    )
}

export default AppProviders
