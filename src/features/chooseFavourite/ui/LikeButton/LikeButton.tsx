import Button from "@/shared/ui/Button"
import { FC } from "react"
import HeartIcon from "@/shared/assets/icons/heart-icon.svg?react"

const LikeButton: FC = () => {
  return (
    <Button className="" onClick={() => console.log()}>
      <HeartIcon />
    </Button>
  )
}

export default LikeButton