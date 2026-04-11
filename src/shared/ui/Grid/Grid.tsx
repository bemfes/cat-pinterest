import { FC } from "react"
import { GridProps } from "./types"

const Grid: FC<GridProps> = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Grid
