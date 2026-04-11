import Button from "@/shared/ui/Button"
import { FC } from "react"
import HeartIcon from "@/shared/assets/icons/heart-icon.svg?react"
import styles from './LikeButton.module.css'
import { LikeButtonProps } from "./types"
import { useFavouriteCatsContext } from "../../model"

const LikeButton: FC<LikeButtonProps> = ({id, url}) => {
  const { handleFavouriteCat } = useFavouriteCatsContext()
  return (
    <Button className={styles.button} onClick={() => handleFavouriteCat({url: url, id: id})}>
      <HeartIcon className={styles.heart} />
    </Button>
  )
}

export default LikeButton