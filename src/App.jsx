import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutBase } from "./Pages/LayoutBase";
import { LandingPage } from "./Pages/LandingPage";
import { About } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import LogoutPage from "./Pages/LogoutPage";
import FakeLoginPage from "./Pages/FakeLoginPage";
import MainPage from "./Pages/MainPage";

export function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutBase
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          >
            <Route index element={<FakeLoginPage />} />
            <Route index element={<LandingPage />} />
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/Loggedin" element={<MainPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Loggedout" element={<LogoutPage />} /> ll
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
