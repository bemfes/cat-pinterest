import type { CatItemType } from "@/entities/cat/model"
import CatItem from "@/entities/cat/ui/CatItem"
import { useFavouriteCatsContext } from "@/features/chooseFavourite/model"
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"
import Grid from "@/shared/ui/Grid"
import { FC } from "react"
import styles from './FavouriteCatsFeed.module.css'
import Placeholder from "@/shared/ui/Placeholder"

const FavouriteCatsFeed: FC = () => {

    const {favouriteCats} = useFavouriteCatsContext()

    if (favouriteCats.length === 0) {
        return <Placeholder className={styles.box} linkText="Выбрать любимых котиков 😻" text="У вас пока нет любимых котиков 😿 Скорее выберите кого-то! 😸" to={'/'}/>
    }
   
    return (
        <Grid className={styles.grid}>
            {favouriteCats.map((item: CatItemType) => (
                <CatItem key={item.id} url={item.url} id={item.id}>
                    <LikeButton id={item.id} url={item.url}/>
                </CatItem>
           ))}
        </Grid>
        
    )
}

export default FavouriteCatsFeed
