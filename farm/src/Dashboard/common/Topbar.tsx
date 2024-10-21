import { Search } from "lucide-react"
import { useAuth } from "../../Authentication/AuthProvider/AuthContext"


const Topbar = () => {
  const {userAuth} = useAuth()
  const profilePic = userAuth?.profile_img
  return (
    <div className="flex items-center justify-between p-2 bg-gray-50">
    <div className="relative">
        <input 
            type="text" 
            placeholder="Search" 
            className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"></Search>
    </div>
    <div className="flex items-center space-x-4">
        <img src="https://placehold.co/40x40" alt="UK flag" className="w-10 h-10 rounded-full"/>
        
        <img src={profilePic} alt="User profile picture" className="w-10 h-10 rounded-full"/>
    </div>
</div>
  )
}

export default Topbar