import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div >
        <div>
          <Navbar />
        <Outlet></Outlet>
        <Toaster/>
        </div>
    </div>
  )
}

export default Root