import { useEffect, useState } from "react";

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
      <h1>Directory</h1>
      <ul>
      {directory ? (
        <ul>
          {directory.list.data.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
        </ul>
        ) : (
            <p>Loading...</p>
        )}
      </ul>
      <button onClick={handleSignInButtonClick} value='something'>SIGN IN WITH SSO</button>
    </div>
  );
}
