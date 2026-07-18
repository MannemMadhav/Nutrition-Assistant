import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchSuggestions = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('http://localhost:4000/suggestions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuggestions(res.data);
    } catch (error) {
      console.error('Failed to fetch suggestions', error);
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this suggestion?');
    if (!confirmDelete) return;

    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:4000/suggestion/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuggestions((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error('Error deleting suggestion:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };


  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || !user.isAdmin) {
      alert('Access denied. Admins only.');
      window.location.href = '/';
    } else {
      fetchSuggestions();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Logout
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Panel - User Suggestions</h1>

      {loading ? (
        <p className="text-center text-gray-700">Loading...</p>
      ) : suggestions.length === 0 ? (
        <p className="text-center text-gray-600">No suggestions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr className="text-left text-gray-700">
                <th className="p-3">Email</th>
                <th className="p-3">Age</th>
                <th className="p-3">Height (cm)</th>
                <th className="p-3">Weight (kg)</th>
                <th className="p-3">BMI</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.map((s) => (
                <tr key={s._id} className="border-b hover:bg-pink-50 transition duration-150">
                  <td className="px-4 py-2">
                    <div className="font-medium">{s.userId?.username}</div>
                    <div className="text-sm text-gray-500">{s.userId?.email}</div>
                  </td>
                  <td className="p-3">{s.age}</td>
                  <td className="p-3">{s.height}</td>
                  <td className="p-3">{s.weight}</td>
                  <td className="p-3">{!isNaN(s.bmi) ? Number(s.bmi).toFixed(2) : 'N/A'}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(s._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
