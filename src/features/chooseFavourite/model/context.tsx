import { CatItemType } from "@/entities/cat/model";
import { FAVOURITE_CATS_KEY } from "@/shared/constants";
import { createContext } from "react";
import { FC, useEffect, useState } from "react";
import { FavouriteCatsContextProps, FavouriteCatsContextProviderProps } from "./types";

export const FavouriteCatsContext = createContext<FavouriteCatsContextProps | null>({
    favouriteCats: [],
    handleFavouriteCat: () => {},
    isItFavouriteCat: () => undefined
})

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

    const handleFavouriteCat = (item: CatItemType) => {
        setFavouriteCats(previousData => {
            const isAdded = previousData.find(cat => cat.id === item.id)
            if (isAdded) {
                const newData = previousData.filter(cat => cat.id !== item.id)
                return newData
            }
            return [ ...previousData, item ]
        })
    }

    const isItFavouriteCat = (id: string) => {
        return favouriteCats.find(cat => cat.id === id)
    }

    return (
        <FavouriteCatsContext.Provider value={{favouriteCats, handleFavouriteCat, isItFavouriteCat}}>
            {children}
        </FavouriteCatsContext.Provider>
    )
}

export default FavouriteCatsContextProvider