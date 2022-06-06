import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AdminPage } from "./components/admin-page/admin-page.tsx";
import { ErrorPage } from "./components/error_page/error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/admin" />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
