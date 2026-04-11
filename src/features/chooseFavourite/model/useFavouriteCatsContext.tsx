import { useContext } from "react"
import { FavouriteCatsContext } from "./context"

export const useFavouriteCatsContext = () => {
    return useContext(FavouriteCatsContext)
}