import Router from "./Router.jsx";
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

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
                    <Router />
                </div>
            )}
        </>
    );
}

export default App;