import type { FC } from "react"
import AppLink from "../AppLink/AppLink"
import type { PlaceholderProps } from "./types"
import styles from './Placeholder.module.css'

const Placeholder: FC<PlaceholderProps> = ({to, text, linkText, className}) => {
    return (
        <div className={`${styles.dummy} ${className}`}>
            <p className={styles.text}>{text}</p>
            <AppLink className={styles.link} to={to}>{linkText}</AppLink>
        </div>
    )
}

export default Placeholder
