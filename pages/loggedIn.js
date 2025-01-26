import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoggedIn() {
  const router = useRouter();
  const { code } = router.query;
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (code) {
      fetch(`/api/getProfile?code=${code}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch user profile");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Fetched profile:", data);
          setUserProfile(data);
        })
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, [code]);

  const handleLogOutClick = () => {
    console.log("LOGOUT");
    window.location.href = "/api/handleLogout";
  };

  return (
    <>
      <h1>Welcome! Glad you could log in!</h1>
      <p>
        {userProfile ? (
          <pre>{JSON.stringify(userProfile, null, 2)}</pre>
        ) : (
          "Loading profile information..."
        )}
      </p>
      <button onClick={handleLogOutClick}>LOG OUT</button>
    </>
  );
}
