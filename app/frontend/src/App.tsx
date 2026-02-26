import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { Asset } from "./AssetList";
import AssetList from "./AssetList";
import Header from "./Header";
import NavBar from "./NavBar";
import WelcomeSection from "./WelcomeSection";
import DesksOverview from "./DesksOverview";
import CubiclesOverview from "./CubiclesOverview";
import UserAssignments from "./UserAssignments";

const sampleAssets: Asset[] = [
  { id: 1, name: "Dell Monitor", type: "Monitor", assignedTo: "Alice" },
  { id: 2, name: "Logitech Headphone", type: "Headphone", assignedTo: "Bob" },
  { id: 3, name: "Desk 101", type: "Desk", assignedTo: "Charlie" },
  { id: 4, name: "Cubicle A", type: "Cubicle" },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <NavBar />
        <main className="p-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WelcomeSection />
                </>
              }
            />
            <Route path="/desks" element={<DesksOverview />} />
            <Route
              path="/assets"
              element={<AssetList assets={sampleAssets} />}
            />
            <Route path="/cubicles" element={<CubiclesOverview />} />
            <Route path="/users" element={<UserAssignments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
