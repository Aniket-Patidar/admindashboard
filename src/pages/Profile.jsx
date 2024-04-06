import React, { useState } from "react";
import Layout from "../components/Layout";
import profileImage from "../assets/profile.webp";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    username: "admin",
    email: "admin@example.com",
    fullName: "Admin User",
    role: "Administrator",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...adminData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdminData({ ...formData });
    setEditMode(false);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <div className="relative mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full h-40 w-40 object-cover shadow-lg"
          />
          {editMode && (
            <button
              onClick={() => setEditMode(false)}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none shadow-md"
            >
              Cancel
            </button>
          )}
        </div>
        {!editMode ? (
          <div className="text-center space-y-4">
            <div className="text-gray-700">
              <label className="font-medium">Username:</label>{" "}
              <span>{adminData.username}</span>
            </div>
            <div className="text-gray-700">
              <label className="font-medium">Email:</label>{" "}
              <span>{adminData.email}</span>
            </div>
            <div className="text-gray-700">
              <label className="font-medium">Full Name:</label>{" "}
              <span>{adminData.fullName}</span>
            </div>
            <div className="text-gray-700">
              <label className="font-medium">Role:</label>{" "}
              <span>{adminData.role}</span>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="username" className="block font-medium text-gray-800">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="fullName" className="block font-medium text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="role" className="block font-medium text-gray-800">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default AdminProfile;
