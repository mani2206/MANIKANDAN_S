import React, { useState, useEffect } from "react";
import PreLoadingScreen from "./components/layerComponents/PreLoadingScreen";
import Error_Page from "./components/layerComponents/Error_Page";
import Home from "./components/pageComponents/Home";
import { BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
import SmoothScroll from "./components/baseComponents/SmoothScroll";

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
      {loading ? (
        <PreLoadingScreen />
      ) : (
        <>
          <Router>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/error" element={<Error_Page />} />
              </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
