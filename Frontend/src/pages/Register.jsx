import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lnav from '../components/LNavbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password, isAdmin };

    try {
      const result = await axios.post("http://localhost:4000/register", payload);

      if (result.data === "Account Created") {
        alert("Account created successfully");
        navigate("/login");
      } else {
        alert(result.data || "Account creation failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Failed to create account");
    }
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200">
      <Lnav />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="mb-6 text-center text-4xl font-semibold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Please enter your credentials to Register
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="isAdmin"
                name="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="h-4 w-4 text-rose-600 border-gray-300 rounded"
              />
              <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-800">
                Register as Admin
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-[#b21b46] hover:bg-rose-700 focus:outline-none focus:ring-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={goToLogin}
              className="font-medium text-rose-600 hover:text-rose-800"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
