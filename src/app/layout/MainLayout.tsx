import Header from "@/widgets/Header/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <> 
        <Header/>
        <main className="container main">
        <Outlet/>
        </main>
        </>
    )
}

export default MainLayout
