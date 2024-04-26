import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const Root = () => {
  return (
    <div >
        <div>
          <Navbar />
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Root