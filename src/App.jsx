// import "./App.css";
import { useState } from "react";
import { DashboardPage } from "./components/DashboardPage";
import { HomePage } from "./components/HomePage";

function App() {
  const [renderDashboard, setRenderDashboard] = useState(false);

  return (
    <>
      {renderDashboard ? (
        <DashboardPage
          setRenderDashboard={setRenderDashboard}
          renderDashboard={renderDashboard}
        />
      ) : (
        <HomePage
          setRenderDashboard={setRenderDashboard}
          renderDashboard={renderDashboard}
        />
      )}
    </>
  );
}

export default App;
