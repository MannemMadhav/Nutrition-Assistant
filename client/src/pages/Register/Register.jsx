import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "Male",
    height: "",
    weight: "",
    goal: "Muscle Gain",
    activityLevel: "Moderately Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful!");

      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <form
        onSubmit={handleRegister}
        className="bg-slate-800 p-8 rounded-xl w-full max-w-lg space-y-4"
      >
        <h1 className="text-white text-3xl font-bold text-center">
          Register
        </h1>

        <input
          className="w-full p-3 rounded"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded"
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <select
          className="w-full p-3 rounded"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          className="w-full p-3 rounded"
          type="number"
          placeholder="Height (cm)"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />

        <input
          className="w-full p-3 rounded"
          type="number"
          placeholder="Weight (kg)"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />

        <select
          className="w-full p-3 rounded"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        >
          <option>Muscle Gain</option>
          <option>Weight Loss</option>
          <option>Maintain Weight</option>
        </select>

        <select
          className="w-full p-3 rounded"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
        >
          <option>Sedentary</option>
          <option>Lightly Active</option>
          <option>Moderately Active</option>
          <option>Very Active</option>
        </select>

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;