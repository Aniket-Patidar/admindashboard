import React from "react";
import Layout from "../components/Layout";

function Dashboard() {
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
                  <div className="card h-[150px] w-full sm:w-[300px] bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <img
                      className="mx-auto"
                      src="/images/totalStudent-icons.png"
                      alt=""
                    />
                    <h2>Total Product : 28</h2>
                  </div>
                  <div className="card h-[150px] w-full sm:w-[300px] bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <img
                      className="mx-auto"
                      src="/https://imgs.search.brave.com/aXaLb3p1CqOhpCsftaQ-Rdz7UYW2J-xHXR5UQntj_sY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24teW91bmct/dXNlci1pY29uLTI0/MDAucG5n"
                      alt=""
                    />
                    <h2>Total User : 15</h2>
                  </div>
                  <div className="card h-[150px] w-full sm:w-[300px] bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <img
                      className="mx-auto"
                      src="/images/fees-icon.png"
                      alt=""
                    />
                    <h2>All Orders  : 42738 ₹</h2>
                  </div>
                </div>
              </div>
              {/* Admin Panel Content */}
              {/* Histogram */}
              <canvas id="myChart" />
              {/* Histogram */}
              {/* Addmission query  */}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Dashboard;
