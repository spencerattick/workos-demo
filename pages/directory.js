import { useEffect, useState } from "react";

export default function Directory() {
    const [directory, setDirectory] = useState(null);

    useEffect(() => {
        fetch("/api/getDirectory")
          .then((res) => res.json())
          .then((data) => setDirectory(data))
          .catch((err) => console.error("Error fetching directory:", err));
      }, []);

    const handleGoBackClick = () => {
        window.location.href = "/loggedIn";
    }

    const toTitleCase = (str) => {
      return str
        .replace(/([A-Z])/g, " $1") 
        .replace(/^./, (char) => char.toUpperCase()); 
    };

    const excludedFields = ["rawAttributes", "customAttributes", "emails", "directoryId", "groups", "idpId", "organizationId", "object", "id"];

  return (
    <>
      <h1>DIRECTORY</h1>
      <ul>
        {directory ? (
            <table>
              <thead>
                <tr>
                  {Object.keys(directory.list.data[0])
                    .filter((key) => !excludedFields.includes(key)) 
                    .map((key) => (
                      <th key={key}>{toTitleCase(key)}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {directory.list.data.map((user, index) => (
                  <tr key={index}>
                    {Object.entries(user)
                      .filter(([key]) => !excludedFields.includes(key)) 
                      .map(([_, value], i) => (
                        <td key={i}>{typeof value === "object" ? "" : value}</td> 
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
 
            ) : (
                <p>Loading...</p>
            )}
        </ul>
      <button onClick={handleGoBackClick}>GO BACK</button>
    </>
  );
}
