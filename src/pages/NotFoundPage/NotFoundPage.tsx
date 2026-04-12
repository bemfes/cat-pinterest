import Placeholder from "@/shared/ui/Placeholder"
import { FC } from "react"

const NotFoundPage: FC = () => {
    return (
        <Placeholder to={ "/" } linkText="Вернуться к котикам 😻" text="К сожалению, мы не нашли нужную вам страницу 😿"/>
    )
}

export default NotFoundPage
