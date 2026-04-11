import Grid from "@/shared/ui/Grid"
import useGetCats from "../model/useGetCats"
import CatItem from "@/entities/cat/ui/CatItem"
import type { CatItemType } from "@/entities/cat/model"

const CatFeed = () => {
    
   const { data } = useGetCats()
    
    return (
        <>
        <Grid className="">
           {data.map((item: CatItemType) => (
                <CatItem key={item.id} url={item.url} id={item.id} />
           ))}
        </Grid>
        </>
    )
}

export default CatFeed
