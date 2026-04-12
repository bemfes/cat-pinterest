import { useEffect, useState } from "react"
import type { CatItemType } from "@/entities/cat/model"
import { getCats } from "@/entities/cat/api"

const useGetCats = () => {

    const [data, setData] = useState<CatItemType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [page, setPage] = useState<number>(0)
    const [totalImages, setTotalImages] = useState<number>(0)

    
    useEffect(() => {
        async function getCatsImages() {
          try {

            setLoading(true)
            setError(null)
            
            const { catData, totalCountImages } = await getCats(page, 15)

            setData(prev => [ ...prev, ...catData ])

            setTotalImages(totalCountImages)
          
          } catch (error: unknown) {

            if (error instanceof Error) {
              setError(error.message)
            } else {
            setError('Unknown error')
          }

        } finally {
          setLoading(false)
        }
      }
      
      getCatsImages()
      
    }, [page])

    return { data, loading, error, totalImages, setPage }
}

export default useGetCats
