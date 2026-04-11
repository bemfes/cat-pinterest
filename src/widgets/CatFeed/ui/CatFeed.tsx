import Grid from "@/shared/ui/Grid"
import useGetCats from "../model/useGetCats"
import CatItem from "@/entities/cat/ui/CatItem"
import type { CatItemType } from "@/entities/cat/model"
import styles from './CatFeed.module.css'
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"

const CatFeed = () => {
    
   const { data, loading, error } = useGetCats()

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
        </>
    )
}

export default CatFeed
