import { CAT_API_URL } from "@/shared/constants"
import type { CatApiResponse } from "./types"
import type { CatItemType } from "../model"

export const getCats = async (page: number, limit: number): Promise<{ catData: CatItemType[], totalCountImages: number}> => {
    const res: Response = await fetch(
        `${CAT_API_URL}?page=${page}&limit=${limit}`,
         {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.VITE_API_KEY
         }
        })
    if (!res.ok) {
        throw new Error('Failed to fetch')
    }
    const responseData: CatApiResponse[] = await res.json()
    const catData: CatItemType[] = responseData.map(cat => ({url: cat.url, id: cat.id}))
    const totalCountImages = Number(res.headers.get('pagination-count'))

    return { catData, totalCountImages }
}

