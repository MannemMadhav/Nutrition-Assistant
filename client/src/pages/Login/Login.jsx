import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo Login
    localStorage.setItem("token", "demo-token");

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Demo User",
        email: email || "demo@gmail.com",
      })
    );

    alert("Demo Login Successful");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-xl w-96 space-y-5"
      >
        <h1 className="text-white text-3xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-600 text-white w-full p-3 rounded"
        >
          Demo Login
        </button>
      </form>
    </div>
  );
}

export default Login;