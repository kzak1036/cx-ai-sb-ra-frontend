import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UploadPage } from "./pages/UploadPage";
import { LoadingPage } from "./pages/LoadingPage";
import { LayoutWithoutButtons } from "./components/LayoutWithoutButtons/LayoutWithoutButtons";
import { Layout } from "./components/Layout/Layout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutWithoutButtons />}>
                    <Route path="/" element={<UploadPage />} />
                    <Route path="loading" element={<LoadingPage />} />
                </Route>
                {/* Use Layout for navigation of intelligence views */}
                <Route path="/result" element={<Layout />} />
            </Routes>
        </Router>
    );
};

export default App;
