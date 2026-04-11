import { FC } from "react"
import { CatItemProps } from "./types"


const CatItem: FC<CatItemProps> = ({url, children}) => {
    return (
       <div>
        <img src={url} alt="adorable cat" />
        {children}
       </div>
    )
}

export default CatItem