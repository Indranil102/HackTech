
import logo from'../../assets/logo.png'
import {Link} from 'react-router-dom'
import { CiBellOn } from "react-icons/ci";
import Admin from '../../page/Admin/Admin';
const Navbar = () => {
  return (
    <div>
    <div className="h-[70px] w-full  text-black flex shadow-lg">
      
      <div className="ml-[100px] flex items-center ">
        <img className="h-9 w-9 rounded-full" src={logo} alt="logo" />
      <h2 className="ml-1">Insight Hunts</h2>
      
      
      <ul className=" ml-[50px] flex space-x-4   cursor-pointer font-semibold">
        <Link to="/"><li>DashBoard</li></Link>
         <Link to="/analytic"><li>Analytic </li></Link>
          <li>Report</li>
          
      </ul>
      </div>
      <div className="flex items-center space-x-4 ml-[700px] cursor-pointer">
        {<CiBellOn  size={35}/>} 
        <Link to="/Login"><button className="w-[90px] h-[40px] bg-blue-800 rounded text-xl text-amber-50 cursor-pointerd">Login</button></Link>
      </div>
    </div>


    <Admin></Admin>
    </div>
  )
}

export default Navbar
