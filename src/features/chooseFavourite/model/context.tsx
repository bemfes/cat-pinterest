import { CatItemType } from "@/entities/cat/model";
import { FAVOURITE_CATS_KEY } from "@/shared/constants";
import { createContext } from "node:vm";
import { FC, useEffect, useState } from "react";

export const FavouriteCatsContext = createContext()

const FavouriteCatsContextProvider: FC = ({children}) => {

    const [favouriteCats, setFavouriteCats] = useState<CatItemType[]>()

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