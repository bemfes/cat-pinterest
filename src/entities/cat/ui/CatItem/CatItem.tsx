import { FC, useState } from "react"
import { CatItemProps } from "./types"
import styles from './CatItem.module.css'


const CatItem: FC<CatItemProps> = ({url, children}) => {
    const [loading, setLoading] = useState<boolean>(true)
    return (
       <div className={`${styles.item} ${loading ? '' : styles.itemLoaded}`}>
        {loading && <div className={styles.skeleton}></div>}
        <img onLoad={() => setLoading(false)} className={styles.img} src={url} alt="adorable cat" />
        <div className={styles.wrapper}>
            {children}
        </div>
       </div>
    )
}

export default CatItem