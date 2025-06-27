import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user.name || !user.email || !user.password) {
      toast.error("All fields Required");
      return;
    }
    try {
      const payload = {
        name: user.name,
        email: user.email,
        password: user.password
      }
      const URL = `${import.meta.VITE_BACKEND_URL}/register`;
      const response = await axios.post(URL, payload);
      if (response.data.success) {
        toast.success("Registered Successfully");
      } else {
        toast.error(response.data.message || "Registration Failed");
      }
    } catch (err) {
      console.log("Error in Registration", err);
      toast.error(err?.response?.data?.message || "Registration Failed");
    }

  }

  return (
    <div className=''>
      <form
        onSubmit={handleOnSubmit}
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500 px-4">
        <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-lg p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-center  mb-2">Sign Up</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleOnChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <div className="text-right mb-6">
          <Link href="#" className="text-sm text-gray-400 hover:underline">Forgot password?</Link>
        </div> */}

          <button
            type="submit"
            className="mb-3 w-full py-3 rounded bg-transparent  border border-white text-white hover:bg-white hover:text-blue-600 transition"
          >
            Register
          </button>

          <p className="mt-6 mb-0 text-center text-sm text-gray-400">
            Have an account?{' '}
            <Link to={"/login"} className="font-semibold text-white hover:underline">Login</Link>
          </p>
          <p className="mt-6 pt-2 text-center text-sm text-gray-400">
            <Link to={"/"} className="font-semibold text-white hover:underline">Go Home Page</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
