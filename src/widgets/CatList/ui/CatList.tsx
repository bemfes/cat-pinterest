import type { CatItemType } from "@/entities/cat/model"
import CatItem from "@/entities/cat/ui/CatItem"
import LikeButton from "@/features/chooseFavourite/ui/LikeButton"
import Grid from "@/shared/ui/Grid"
import type { FC } from "react";
import styles from './CatList.module.css'

interface CatListProps {
    data: CatItemType[];
}

const CatList: FC<CatListProps> = ({data}) => {
    return (
        <Grid className={styles.grid}>
            {data.map((item: CatItemType) => (
                <CatItem key={item.id} url={item.url} id={item.id}>
                    <LikeButton id={item.id} url={item.url}/>
                </CatItem>
           ))}
        </Grid>
    )
}

export default CatList
