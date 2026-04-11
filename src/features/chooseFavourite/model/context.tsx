import { CatItemType } from "@/entities/cat/model";
import { FAVOURITE_CATS_KEY } from "@/shared/constants";
import { createContext } from "node:vm";
import { FC, useEffect, useState } from "react";
import { FavouriteCatsContextProviderProps } from "./types";

export const FavouriteCatsContext = createContext()

const FavouriteCatsContextProvider: FC<FavouriteCatsContextProviderProps> = ({children}) => {

    const [favouriteCats, setFavouriteCats] = useState<CatItemType[]>(() => {
        const oldData = localStorage.getItem(FAVOURITE_CATS_KEY)
        if (!oldData || oldData === 'undefined') {
            return []
        }
        return JSON.parse(oldData)
    })

    useEffect(() => {
        localStorage.setItem(FAVOURITE_CATS_KEY, JSON.stringify(favouriteCats))
    }, [favouriteCats])

    return (
        <FavouriteCatsContext.Provider value={{favouriteCats}}>
            {children}
        </FavouriteCatsContext.Provider>
    )
}

export default FavouriteCatsContextProvider