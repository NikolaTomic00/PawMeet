import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://pawmeet.onrender.com/api/test")
      .then((res) => {
        console.log("RESPONSE:", res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  return <h1>PawMeet</h1>;
}

export default App;
