import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoggedIn() {
  const router = useRouter();
  const { code } = router.query;

  const [userProfile, setUserProfile] = useState(null);

  const fetchProfile = async (authCode) => {
    try {
      const res = await fetch(`/api/getProfile?code=${authCode}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const data = await res.json();
      setUserProfile(data);
      localStorage.setItem("userProfile", JSON.stringify(data)); 
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    } else if (code) {
      fetchProfile(code);
    }
  }, [code]);

  const handleLogOutClick = () => {
    localStorage.removeItem("userProfile"); 
    window.location.href = "/api/handleLogout";
  };

  const handleSeeDirectoryClick = () => {
    window.location.href = "/directory";
  };

  return (
    <>
      <h1>Welcome!</h1>
      {userProfile ? (
        <p>
          Nice to see you, <strong>{userProfile.firstName} {userProfile.lastName}</strong>!
        </p>
      ) : (
        <p>Loading profile information...</p>
      )}
      <div className="button-container"> 
        <button onClick={handleSeeDirectoryClick}>SEE DIRECTORY</button>
        <button onClick={handleLogOutClick}>LOG OUT</button>
      </div>
    </>
  );
}
