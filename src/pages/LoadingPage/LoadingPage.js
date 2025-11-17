import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { runAgent } from "../../services/agentService";
import { Loader } from "../../components/Loader";

export const LoadingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, searchText, file } = location.state || {};

    useEffect(() => {
        if (!userId || !searchText || !file) {
            navigate("/");
            return;
        }

        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append("userId", userId);
                formData.append("searchText", searchText);
                formData.append("file", file);

                // Run agent and get JSON result
                const result = await runAgent(formData);

                // Persist result so <Layout /> can read it directly
                try {
                    sessionStorage.setItem("lastResult", JSON.stringify(result));
                } catch (_) {
                    // ignore storage errors; Layout will show empty state
                }

                // Navigate to /result where <Layout /> provides navigation
                navigate("/result");
            } catch (error) {
                console.error("Error while running the agent:", error.response || error.message);
                alert("Error occurred while running the agent.");
                navigate("/");
            }
        };

        fetchData();
    }, [userId, searchText, file, navigate]);

    return <Loader text="Processing your request, please wait..." />;
};
