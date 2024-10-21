import { Outlet } from "react-router-dom"
import Sidebar from "./common/Sidebar"
import Topbar from "./common/Topbar"



const Dashboard = () => {
    
  return (
    <>
      <div className="flex flex-row"> 
      <div className="max-w-2xl"> 
      <Sidebar />
      </div>
      
      <div className="flex-1 p-6">
        <Topbar/>
       
        <Outlet/>
      </div>
      
      </div>
     
      
    </>
  )
}

export default Dashboard