import HashLoader from "react-spinners/HashLoader";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Components/Nav";
import Home from "./screens/Home";

// scss/css
import "./App.scss";
import "./Components/Nav.scss";
import "./screens/Home.scss";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <HashLoader
            id="loading"
            color={"#f50057"}
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <>
          <Switch>
            {/* components here will have to Navbar */}
            <>
              <Nav />
              <Route path="/">
                <Home/>
              </Route>
            </>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
