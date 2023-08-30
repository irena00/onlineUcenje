import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Statistike({ kursevi, users }) {
  const studentCount = users.filter(user => user.role === "student").length;
  const courseCount = kursevi.length;

  const studentsPerMonth = Array(12).fill(0);
  users.forEach(user => {
    if(user.role === "student") {
      const month = new Date(user.created_at).getMonth();
      studentsPerMonth[month]++;
    }
  });

  const data = [
    { name: 'Jan', Students: studentsPerMonth[0] },
    { name: 'Feb', Students: studentsPerMonth[1] },
    { name: 'Mar', Students: studentsPerMonth[2] },
    { name: 'Apr', Students: studentsPerMonth[3] },
    { name: 'May', Students: studentsPerMonth[4] },
    { name: 'Jun', Students: studentsPerMonth[5] },
    { name: 'Jul', Students: studentsPerMonth[6] },
    { name: 'Aug', Students: studentsPerMonth[7] },
    { name: 'Sep', Students: studentsPerMonth[8] },
    { name: 'Oct', Students: studentsPerMonth[9] },
    { name: 'Nov', Students: studentsPerMonth[10] },
    { name: 'Dec', Students: studentsPerMonth[11] }
];


  return (
    <div className="statistics-container">
      <div className="counters">
        <div className="counter">
          Total Courses: {courseCount}
        </div>
        <div className="counter">
          Total Students: {studentCount}
        </div>
      </div>
      <div className="chart">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Students" fill="blue" />
        </BarChart>
      </div>
    </div>
  );
}

export default Statistike;
