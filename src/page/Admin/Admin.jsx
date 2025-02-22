import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";


  
  
  const Admin = () => { 
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/jobs/trends")
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);
    
      const jobColors = {
        "Software Engineer": "#4CAF50",
        "Data Analyst": "#2196F3",
        "Project Manager": "#FF9800",
        "UX Designer": "#9C27B0",
        "Data Scientist": "#E91E63",
        "DevOps Engineer": "#00BCD4",
        "Product Manager": "#8BC34A",
        "Marketing Specialist": "#FF5722",
        "Cybersecurity Analyst": "#795548"
      };
  
  return (
    <div>
      <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">📊 Peak Job Roles Per Month</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ left: 50, right: 30 }}>
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" width={80} />
          <Tooltip />
          <Legend />
          {Object.keys(jobColors).map((job) => (
            <Bar key={job} dataKey="count" name={job} fill={jobColors[job]} barSize={30} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Admin
