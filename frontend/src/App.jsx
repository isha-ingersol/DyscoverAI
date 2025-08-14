import { useEffect, useState } from "react";
import Router from "./Router.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- login state

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="dyscoverAI-loader active">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="dyscoverAI-visible active">
          <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </>
  );
}

export default App;
