import type { FC } from "react"
import { NavLink } from "react-router-dom"
import type { AppLinkProps } from "./types"

const AppLink: FC<AppLinkProps> = ({ to, children, className }) => {
    return (
        <NavLink className={className} to={to}>
            {children}
        </NavLink>
    )
}

export default AppLink