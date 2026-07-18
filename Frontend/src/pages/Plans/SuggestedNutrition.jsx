import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Unavbar from '../User/UnavBar';

const SuggestedNutrition = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && user.id) {
      axios.get(`http://localhost:4000/getsuggestion/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setSuggestions(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching suggestions:', error);
          setIsLoading(false);
        });
    }
  }, []);

  const deleteData = async (taskId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:4000/suggestion/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Plan deleted');
      setSuggestions((prev) => prev.filter((s) => s._id !== taskId));
    } catch (error) {
      console.error("Failed to delete plan:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 text-gray-800">
      <Unavbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-[#b21b46]  text-center mb-10">Diet Suggestions</h1>

        {isLoading ? (
          <p className="text-center text-lg font-medium">Loading...</p>
        ) : suggestions.length === 0 ? (
          <p className="text-center text-lg font-medium">No suggestions available.</p>
        ) : (
          <div className="space-y-6">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion._id}
                className="bg-[#b21b46] rounded-xl shadow-lg overflow-hidden"
              >
                {/* Header */}
                <div className="bg-black text-white flex items-center justify-between px-6 py-4">
                  <div className="space-x-8 flex flex-wrap text-sm sm:text-base">
                    <p><span className="font-semibold">Age:</span> {suggestion.age}</p>
                    <p><span className="font-semibold">Height:</span> {suggestion.height}</p>
                    <p><span className="font-semibold">Weight:</span> {suggestion.weight}</p>
                  </div>
                  <button
                    onClick={() => deleteData(suggestion._id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 py-4 space-y-2 text-white">
                  <p><span className="font-semibold">Timing:</span> {suggestion.timing}</p>
                  <p><span className="font-semibold">Calorie Intake:</span> {suggestion.calorieIntake}</p>
                  <p><span className="font-semibold">Walk:</span> {suggestion.walk}</p>
                  <p><span className="font-semibold">Carbohydrate Needs:</span> {suggestion.carbohydrateNeeds}</p>
                  <p><span className="font-semibold">Protein Needs:</span> {suggestion.proteinNeeds}</p>
                  <p><span className="font-semibold">BMI:</span> {suggestion.bmi}</p>

                  {/* Suggestion */}
                  <div className="bg-black text-white rounded-md p-4 mt-4">
                    <h3 className="font-bold">Suggestion:</h3>
                    <p>{suggestion.suggestion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestedNutrition;
