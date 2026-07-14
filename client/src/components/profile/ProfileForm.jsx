import { useEffect, useState } from "react";
import { updateProfile } from "../../services/profileService";

function ProfileForm({ user, onUpdated }) {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activityLevel: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || "",
        age: user.age || "",
        height: user.height || "",
        weight: user.weight || "",
        goal: user.goal || "",
        activityLevel: user.activityLevel || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(form);

      alert("Profile updated successfully!");

      if (onUpdated) {
        onUpdated();
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to update profile."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 rounded-2xl p-8 shadow-lg space-y-5"
    >
      {[
        ["fullName", "Full Name"],
        ["age", "Age"],
        ["height", "Height (cm)"],
        ["weight", "Weight (kg)"],
        ["goal", "Goal"],
        ["activityLevel", "Activity Level"],
      ].map(([name, placeholder]) => (
        <input
          key={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-slate-900 text-white rounded-lg p-3"
        />
      ))}

      <button className="w-full bg-green-600 hover:bg-green-700 rounded-lg p-3 text-white">
        Save Profile
      </button>
    </form>
  );
}

export default ProfileForm;