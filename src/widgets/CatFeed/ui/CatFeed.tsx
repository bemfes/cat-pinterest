import Grid from "@/shared/ui/Grid"
import useGetCats from "../model/useGetCats"
import CatItem from "@/entities/cat/ui/CatItem"
import type { CatItemType } from "@/entities/cat/model"
import styles from './CatFeed.module.css'
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"
import { useInfiniteScroll } from "@/shared/hooks"
import { useRef } from "react"

const CatFeed = () => {
    
   const { data, loading, error, totalImages, setPage } = useGetCats()

   const observedEl = useRef<null | HTMLDivElement>(null)

   useInfiniteScroll<CatItemType>({ loading, data, count: totalImages, callback: () => setPage((prev) => prev + 1), observedEl, thresholdNumber: 1 })

   if (loading && data.length === 0) return <p className={styles.text}>... загружаем котиков ...</p>
   if (error) return <p className={styles.text}>{ error }</p>
    
    return (
        <>
        <Grid className={styles.grid}>
           {data.map((item: CatItemType) => (
                <CatItem key={item.id} url={item.url} id={item.id}>
                    <LikeButton id={item.id} url={item.url}/>
                </CatItem>
           ))}
        </Grid>
        <div ref={observedEl}></div>
        { loading && data.length > 0 && <p className={styles.loadingScroll}>... загружаем еще котиков ...</p> }
        </>
    )
}

export default CatFeed
