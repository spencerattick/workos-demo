import { useEffect, useState } from "react";

// [ ] redirect to a welcome page with the user's user's first and last name from identity provider
// [ ] allow user to click into a page that displays the Directory Sync contents
// [ ] ADD ABILITY TO LOG IN WITH TEST SSO OR OKTA
// [ ] double check logout functionality (might not be working right)
// [ ] ensure all /api files are using try/catch
// [ ] FIGURE OUT WHY USERS AREN'T ADDED TO GROUP WITH TEST SSO
// [ ] Deploy to Vercel

export default function Home() {
  const [directory, setDirectory] = useState(null);

  useEffect(() => {
    fetch("/api/getDirectory")
      .then((res) => res.json())
      .then((data) => setDirectory(data))
    //   .then((data) => console.log('CLIIENTTE: ', data))
      .catch((err) => console.error("Error fetching directory:", err));
  }, []);

  const handleSignInButtonClick = event => {
    console.log('CLICKED: ', event.target.value)
    window.location.href = "/api/useSSO";
  }

  return (
    <div>
      <h1>Welcome! Please sign in!</h1>
      {/* <ul>
      {directory ? (
        <ul>
          {directory.list.data.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
        </ul>
        ) : (
            <p>Loading...</p>
        )}
      </ul> */}
      <button onClick={handleSignInButtonClick} value='something'>SIGN IN WITH SSO</button>
    </div>
  );
}
