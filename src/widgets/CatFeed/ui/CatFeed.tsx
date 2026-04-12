import useGetCats from "../model/useGetCats"
import type { CatItemType } from "@/entities/cat/model"
import styles from './CatFeed.module.css'
import { useInfiniteScroll } from "@/shared/hooks"
import { useRef, type FC } from "react"
import CatList from "@/widgets/CatList/ui"

const CatFeed: FC = () => {
    
   const { data, loading, error, totalImages, setPage } = useGetCats()

   const observedEl = useRef<null | HTMLDivElement>(null)

   useInfiniteScroll<CatItemType>({ loading, data, count: totalImages, callback: () => setPage((prev) => prev + 1), observedEl, thresholdNumber: 1 })

   if (loading && data.length === 0) return <p className={styles.text}>... загружаем котиков ...</p>
   if (error) return <p className={styles.text}>{ error }</p>
    
    return (
        <>
        <CatList data={data}/>
        <div ref={observedEl}></div>
        { loading && data.length > 0 && <p className={styles.loadingScroll}>... загружаем еще котиков ...</p> }
        </>
    )
}

export default CatFeed
