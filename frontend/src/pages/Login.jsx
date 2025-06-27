import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        e.stopPropagation();
        if(!user.email || !user.password){
            toast.error("All Field Required");
            return ;
        }

        try{
            const URL = `${import.meta.VITE_BACKEND_URL}/login`;
            const payload = {
                email: user.email,
                password: user.password
            }
            const response = await axios.post(URL,payload);
            if(response?.data?.success){
                toast.success("Logged In");
            }else{
                toast.error(response?.data?.message || "Login Failed !!!");
            }
        }catch (err){
            toast.error(err?.response?.data?.message || "Something Went wrong in Registration !!!");
        }
    }
    return (
        <form 
        onSubmit={handleOnSubmit}
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500 px-4">
            <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-lg p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center uppercase mb-2">Login</h2>
                <p className="text-center text-gray-400 mb-6">Please enter your login and password!</p>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value = {user.email}
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
                        value = {user.password}
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
                    Login
                </button>

                <p className="mt-6 mb-0 text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to={"/register"} className="font-semibold text-white hover:underline">Sign Up</Link>
                </p>
                <p className="mt-6 pt-2 text-center text-sm text-gray-400">
                    <Link to={"/"} className="font-semibold text-white hover:underline">Go Home Page</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;
