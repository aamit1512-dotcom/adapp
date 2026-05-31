import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.log(err);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend is running 🎯</h1>
      <h2>Backend response:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;