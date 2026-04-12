import type { CatItemType } from "@/entities/cat/model"
import CatItem from "@/entities/cat/ui/CatItem"
import { useFavouriteCatsContext } from "@/features/chooseFavourite/model"
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"
import Grid from "@/shared/ui/Grid"
import { FC } from "react"
import styles from './FavouriteCatsFeed.module.css'
import AppLink from "@/shared/ui/AppLink/AppLink"

const FavouriteCatsFeed: FC = () => {

    const {favouriteCats} = useFavouriteCatsContext()

    if (favouriteCats.length === 0) {
        return <div>
        <p>У вас пока нет любимых котиков 😿 <br/> Скорее выберите кого-то! 😸</p>
        <AppLink to={'/'}>Выбрать любимых котиков 😻</AppLink>
        </div>
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
