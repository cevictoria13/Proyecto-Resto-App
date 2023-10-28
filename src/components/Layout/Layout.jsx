import { Outlet } from "react-router-dom"
import Navigation from "../../routes/navigation/navigation"
import { Footer } from "../Footer"


export const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}


