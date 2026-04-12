import { useFavouriteCatsContext } from "@/features/chooseFavourite/model"
import type { FC } from "react"
import styles from './FavouriteCatsFeed.module.css'
import Placeholder from "@/shared/ui/Placeholder"
import CatList from "@/widgets/CatList/ui"

const FavouriteCatsFeed: FC = () => {

    const {favouriteCats} = useFavouriteCatsContext()

    if (favouriteCats.length === 0) {
        return <Placeholder className={styles.box} linkText="Выбрать любимых котиков 😻" text="У вас пока нет любимых котиков 😿 Скорее выберите кого-то! 😸" to={'/'}/>
    }
   
    return (
        <CatList data={favouriteCats}/>
        
    )
}

export default FavouriteCatsFeed
