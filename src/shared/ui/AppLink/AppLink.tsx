import { FC } from "react"
import { NavLink } from "react-router-dom"
import { AppLinkProps } from "./types"

const AppLink: FC<AppLinkProps> = ({ to, children, className }) => {
    return (
        <NavLink className={className} to={to}>
            {children}
        </NavLink>
    )
}

export default AppLink