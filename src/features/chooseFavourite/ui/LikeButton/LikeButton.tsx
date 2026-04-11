import Button from "@/shared/ui/Button"
import { FC } from "react"
import HeartIcon from "@/shared/assets/icons/heart-icon.svg?react"
import styles from './LikeButton.module.css'
import { LikeButtonProps } from "./types"
import { useFavouriteCatsContext } from "../../model"

const LikeButton: FC<LikeButtonProps> = ({id, url}) => {
  const { handleFavouriteCat, isItFavouriteCat } = useFavouriteCatsContext()
  const isButtonLiked = isItFavouriteCat(id)
  return (
    <Button className={styles.button} onClick={() => handleFavouriteCat({url: url, id: id})}>
      <HeartIcon className={`${styles.heart} ${isButtonLiked ? styles.liked : ''}`} />
    </Button>
  )
}

export default LikeButton