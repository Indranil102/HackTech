import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  // Function to handle button click
  const handleClick = (buttonId) => {
    setSelectedButton(buttonId); 
  };
  return (
    <div className="bg-gray-100">
    <div className="ml-[230px] mt-[20px]  h-[18vh] shadow-lg w-[70vw] bg-white relative">
      <div className="ml-[20px] flex flex-col mt-2 w-full absolute  ">
        <input
          type="text"
          placeholder="Search for products (e.g., Salesforce, AWS)"
          className="ml-[12px] w-[65vw] mt-[10px] h-[40px] placeholder:w-[60px] placeholder:text-gray-500  pl-[10px] relative border border-gray-300 "
        />
        <CiSearch className="absolute ml-[20px] mt-4  cursor-pointer" size={30}/>
        <div className="ml-[20px] mt-4 flex gap-6">
        <button
      className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[80px] h-[40px] text-xl font-medium cursor-pointer ${
        selectedButton === 1 ? "bg-blue-500" : "border border-black bg-transparent"
      }`}
      onClick={handleClick}
    >
      All
    </button>
    <button
      className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[120px] h-[40px] text-xl font-medium cursor-pointer ${
        selectedButton === 2 ? "bg-blue-500" : "border border-black bg-transparent"
      }`}
      onClick={handleClick}
    >
      Job Posting
    </button>
    <button
      className={`p-2 rounded-[10px] flex items-center justify-center transition-colors w-[120px] h-[40px] text-xl font-medium cursor-pointer ${
        selectedButton === 2 ? "bg-blue-500" : "border border-black bg-transparent"
      }`}
      onClick={handleClick}
    >
      Tinder
    </button>

        </div>
      </div>
    </div>

    
<div className="mt-[40px] p-6 bg-gray-100 border-1 border-gray-200 w-[50%] ml-[200px]">
<div className="flex ">
<h1 className="text-3xl font-bold mb-6 ml-6">Job Postings</h1>
<h3 className="ml-[430px]">See all</h3>
</div>

{/* Job Card 1 */}
<div className="ml-[10px] bg-white p-6 rounded-lg shadow-md mb-6 w-[40vw]">
  <h2 className="text-2xl font-semibold mb-2">Senior Cloud Solutions Architect</h2> 
  <p className="text-gray-600 mb-1">Accenture Technology</p>
  <p className="text-gray-600 mb-4 flex "><IoLocationOutline size={14} className="mr-2 mt-1.5" />New York, USA</p>
  <div className="flex gap-2">
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GCP</span>
  </div>
</div>

{/* Job Card 2 */}
<div className="ml-[10px] bg-white p-6 rounded-lg shadow-md mb-6 w-[40vw]">
  <h2 className="text-2xl font-semibold mb-2">Senior Cloud Solutions Architect</h2>
  <p className="text-gray-600 mb-1">Product Manager - AI Solutions</p>
  <p className="text-gray-600 mb-4"><IoLocationOutline size={14} className="mr-2 mt-1.5" />Microsoft Corporation</p>
  <div className="flex gap-2">
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GCP</span>
  </div>
</div>

{/* Job Card 3 */}
<div className="ml-[10px] bg-white p-6 rounded-lg shadow-md mb-6 w-[40vw]">
  <h2 className="text-2xl font-semibold mb-2">Senior Cloud Solutions Architect</h2>
  <p className="text-gray-600 mb-1">Product Manager - AI Solutions</p>
  <p className="text-gray-600 mb-4"><IoLocationOutline size={14} className="mr-2 mt-1.5" />Enterprise Sales Executive</p>
  <div className="flex gap-2">
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure</span>
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GCP</span>
  </div>
</div>

{/* View All Button */}
<div className="flex justify-end">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
    View All
  </button>
</div>

{/* Timestamps */}
<div className="mt-6 text-gray-600">
  <p>2 days ago</p>
  <p>3 days ago</p>
  <p>1 day ago</p>
</div>
</div>
</div>
  );
};

export default Home;
