import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lnav from '../components/LNavbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const payload = { email, password };
    const res = await axios.post("http://localhost:4000/login", payload);

    if (res.data.status === "success") {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (res.data.user.isAdmin) {
        navigate("/admin"); 
      } else {
        navigate("/home");
      }
    } else {
      alert(res.data.error || "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("An error occurred during login");
  }
};


  const goToSignup = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200">
      <Lnav />
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="mb-6 text-center text-4xl font-semibold text-gray-800">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Please enter your credentials to log in
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#b21b46] hover:bg-rose-700 text-white font-semibold rounded-lg transition-all"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={goToSignup}
                className="text-rose-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
