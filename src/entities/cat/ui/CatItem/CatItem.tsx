import { FC } from "react"
import { CatItemProps } from "./types"
import styles from './CatItem.module.css'


const CatItem: FC<CatItemProps> = ({url, children}) => {
    return (
       <div className={styles.item}>
        <img className={styles.img} src={url} alt="adorable cat" />
        <div className={styles.wrapper}>
            {children}
        </div>
       </div>
    )
}

export default CatItem