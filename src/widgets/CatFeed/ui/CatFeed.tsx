import useGetCats from "../model/useGetCats"

const CatFeed = () => {
    

   const { data } = useGetCats()
    
    return (
        <>
        data
        </>
    )
}

export default CatFeed
