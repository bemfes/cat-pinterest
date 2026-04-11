import { CatItemType } from "@/entities/cat/model";
import { createContext } from "node:vm";
import { FC, useState } from "react";

export const FavouriteCatsContext = createContext()

const FavouriteCatsContextProvider: FC = ({children}) => {

    const [favouriteCats, setFavouriteCats] = useState<CatItemType[]>()

    return (
        <FavouriteCatsContext.Provider value={{favouriteCats}}>
            {children}
        </FavouriteCatsContext.Provider>
    )
}

export default FavouriteCatsContextProvider