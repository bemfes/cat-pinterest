import type { FC } from "react"
import type { ButtonProps } from "./types"

const Button: FC<ButtonProps> = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}

export default Button