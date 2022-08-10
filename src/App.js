import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes, { sub_routes } from "./routes";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [height, setHeight] = useState(window.visualViewport.height - 40);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setHeight(window.visualViewport.height - 40)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setHeight(window.visualViewport.height - 40)
      );
    };
  }, []);
  return (
    <div className="App" style={{ minHeight: height }}>
      <BrowserRouter>
        <Header />
        <div
          style={{
            paddingTop: "0.67em",
            maxWidth: 400,
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element}>
                {route.name}
              </Route>
            ))}
            {sub_routes.map((route) => (
              <Route path={route.path} element={route.element}>
                {route.name}
              </Route>
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
