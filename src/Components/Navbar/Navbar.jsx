

const Navbar = () => {
  return (
    <div className="h-[70px] w-full  text-black flex shadow-lg">
      
      <div className="ml-[100px] flex items-center space-x-2">
        <img className="" src="" alt="logo" />
      <h2 className="ml-4">Insight Hunts</h2>
      
      
      <ul className="flex space-x-4 ml-[40px] font-medium cursor-pointer">
      <li>DashBoard</li>
          <li>Analytic </li>
          <li>Report</li>
          
      </ul>
      </div>
      <div className="flex items-center space-x-4 ml-[700px] cursor-pointer">
        <img src="" alt="icon" />
        <button className="w-[90px] h-[40px] bg-blue-800 rounded text-xl text-amber-50">Login</button>
        
         
        
      </div>
    </div>
  )
}

export default Navbar
