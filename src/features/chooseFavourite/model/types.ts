import type { CatItemType } from "@/entities/cat/model"

export interface FavouriteCatsContextProviderProps {
    children: React.ReactNode
}

export interface FavouriteCatsContextProps {
    favouriteCats: CatItemType[]
}