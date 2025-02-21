
import logo from'../../assets/logo.png'
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="h-[70px] w-full  text-black flex shadow-lg">
      
      <div className="ml-[100px] flex items-center ">
        <img className="h-9 w-9 rounded-full" src={logo} alt="logo" />
      <h2 className="ml-1">Insight Hunts</h2>
      
      
      <ul className=" ml-[50px] flex space-x-4   cursor-pointer font-semibold">
      <li>DashBoard</li>
          <li>Analytic </li>
          <li>Report</li>
          
      </ul>
      </div>
      <div className="flex items-center space-x-4 ml-[700px] cursor-pointer">
        {<CiBellOn  size={35}/>} 
        <button className="w-[90px] h-[40px] bg-blue-800 rounded text-xl text-amber-50">Login</button>
      </div>
    </div>
  )
}

export default Navbar
