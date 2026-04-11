import Button from "@/shared/ui/Button"
import { FC } from "react"
import HeartIcon from "@/shared/assets/icons/heart-icon.svg?react"
import styles from './LikeButton.module.css'

const LikeButton: FC = () => {
  return (
    <Button className={styles.button} onClick={() => console.log()}>
      <HeartIcon className={styles.heart} />
    </Button>
  )
}

export default LikeButton