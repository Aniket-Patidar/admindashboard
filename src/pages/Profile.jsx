import React, { useState } from "react";
import Layout from "../components/Layout";
import profileImage from "../assets/profile.webp"; // Import profile image

const AdminProfile = () => {
  // Dummy admin data
  const [adminData, setAdminData] = useState({
    username: "admin",
    email: "admin@example.com",
    fullName: "Admin User",
    role: "Administrator",
  });

  // State for form fields
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...adminData });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update admin data with formData
    setAdminData({ ...formData });
    // Disable edit mode after submission
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
              className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 focus:outline-none shadow-md"
            >
              Cancel
            </button>
          )}
        </div>
        {!editMode ? (
          <div className="text-center">
            <div className="mb-2">
              <strong>Username:</strong> {adminData.username}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {adminData.email}
            </div>
            <div className="mb-2">
              <strong>Full Name:</strong> {adminData.fullName}
            </div>
            <div className="mb-2">
              <strong>Role:</strong> {adminData.role}
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
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block font-medium mb-1">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
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
