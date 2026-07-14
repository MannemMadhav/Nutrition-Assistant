import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center">

      <h1 className="text-8xl text-white font-bold">
        404
      </h1>

      <p className="text-gray-400 mt-4">
        Page Not Found
      </p>

      <Link
        to="/dashboard"
        className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}

export default NotFound;