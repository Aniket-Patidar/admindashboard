import React, { useState } from "react";
import Layout from "../components/Layout";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaRegUser } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";

function Dashboard() {
  const data = [
    { date: "Day 1", users: 10 },
    { date: "Day 2", users: 15 },
    { date: "Day 3", users: 20 },
    { date: "Day 4", users: 18 },
    { date: "Day 5", users: 25 },
    { date: "Day 6", users: 22 },
    { date: "Day 7", users: 28 },
  ];

  return (
    <Layout>
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .admin-content .card {\n            background: linear-gradient(to right, #007BFF 50%, #fff 50%);\n            background-size: 200% 100%;\n            background-position: right bottom;\n            transition: all 0.5s ease-out;\n        }\n\n        .admin-content .card:hover {\n            background-position: left bottom;\n        }\n\n        .admin-content .card h2 {\n            margin-top: 5px;\n        }\n\n        @media screen and (max-width: 854px) {\n            .admin-content .card h2 {\n                font-size: 14px;\n            }\n        }\n\n        table {\n            width: 100%;\n            border-collapse: collapse;\n            margin-top: 20px;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid #ddd;\n        }\n\n        th,\n        td {\n            text-align: left;\n            padding: 8px;\n        }\n\n        th {\n            background-color: #303956;\n            color: white;\n        }\n\n        tr:nth-child(even) {\n            background-color: #f2f2f2;\n        }\n    ",
          }}
        />
        <div className="main">
          <div className="dashboard">
            <div id="right-dashboard">
              <div className="nav flex items-center justify-between w-full py-4 px-6 border-b-2 border-gray-200 	">
                <div className="left flex items-center gap-3">
                  <img
                    className="h-[40px]"
                    src="/images/tcps logo.jpeg"
                    alt=""
                  />
                  <h1 className="font-semibold"> Admin Panel</h1>
                </div>
              </div>
              <div className="flex  items-center justify-center">
                <div className="admin-content p-6 flex flex-col sm:flex-row gap-6">
                  <div className="card h-[150px] w-full flex items-center justify-center flex-col sm:w-[300px] bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                  <LiaProductHunt className="mx-auto h-[40px] w-[40px] "  />
                    <h2>Total Product : 28</h2>
                  </div>
                  <div className="card h-[150px] w-[150px] sm:w-[300px] flex items-center justify-center flex-col bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                  <FaRegUser className="mx-auto h-[40px] w-[40px] " />
                    <h2>Total User : 15</h2>
                  </div>
                  <div className="card h-[150px] w-[150px] sm:w-[300px] flex items-center justify-center flex-col bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <img
                      className="mx-auto h-[60px] w-[60px] "
                      src="https://imgs.search.brave.com/XthXoPVROg4sXuYFXa0Bpx69Tb9yAqSmgGbvJcCDiRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2NhcnQtcG5n/LWhkLXBuZy1pbWFn/ZS0yNTYucG5n"
                      alt=""
                    />

                    <h2>All Orders : 42738 ₹</h2>
                  </div>
                </div>
              </div>
              <ResponsiveContainer
                className="mt-16 mx-auto"
                width="80%"
                height={300}
              >
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#4080ED" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Dashboard;
