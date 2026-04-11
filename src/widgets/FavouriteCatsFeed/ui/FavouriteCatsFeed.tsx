import type { CatItemType } from "@/entities/cat/model"
import CatItem from "@/entities/cat/ui/CatItem"
import { useFavouriteCatsContext } from "@/features/chooseFavourite/model"
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"
import Grid from "@/shared/ui/Grid"
import { FC } from "react"

const FavouriteCatsFeed: FC = () => {

    const {favouriteCats} = useFavouriteCatsContext()
   
    return (
        <Grid className="">
            {favouriteCats.map((item: CatItemType) => (
                <CatItem key={item.id} url={item.url} id={item.id}>
                    <LikeButton id={item.id} url={item.url}/>
                </CatItem>
           ))}
        </Grid>
        
    )
}

export default FavouriteCatsFeed
