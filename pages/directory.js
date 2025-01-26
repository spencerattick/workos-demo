import { useEffect, useState } from "react";

export default function Directory() {
    const [directory, setDirectory] = useState(null);

    useEffect(() => {
        fetch("/api/getDirectory")
          .then((res) => res.json())
          .then((data) => setDirectory(data))
        //   .then((data) => console.log('CLIIENTTE: ', data))
          .catch((err) => console.error("Error fetching directory:", err));
      }, []);

  return (
    <>
      <h1>DIRECTORY!</h1>
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
    </>
  );
}
