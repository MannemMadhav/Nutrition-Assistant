import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

function useProfile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    loading,
    user,
    refreshProfile: fetchProfile,
  };
}

export default useProfile;