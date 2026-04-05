 useEffect(() => {
    fetch("/api/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend is running 🎯</h1>
      <h2>Backend response:</h2>
      <p>{message:Hello from backend}</p>
    </div>
  );
}

export default App;