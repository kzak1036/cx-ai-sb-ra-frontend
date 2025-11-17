import React from "react";
import { useLocation } from "react-router-dom";
import { RestaurantIntelligence } from "./components/RestaurantIntelligence";
import { MenuIntelligence } from "../MenuIntelligence/components/MenuIntelligence";
import { MenuAnalytics } from "../MenuAnalytics/components";
import { Container, Tabs, Tab } from "./ResultPage.style";

export const ResultPage = () => {
    const location = useLocation();
    const navResult = location.state && location.state.result ? location.state.result : null;
    const [result, setResult] = React.useState(navResult);

    React.useEffect(() => {
        if (navResult) {
            try {
                sessionStorage.setItem("lastResult", JSON.stringify(navResult));
            } catch (_) {
            }
            setResult(navResult);
        } else if (!result) {
            try {
                const stored = sessionStorage.getItem("lastResult");
                if (stored) {
                    setResult(JSON.parse(stored));
                }
            } catch (_) {
            }
        }

    }, [navResult]);

    const [activeTab, setActiveTab] = React.useState("restaurant");

    if (!result) return <p>No data available</p>;

    const { extractedMenuData, ingredientsData, calculatedMenuData } = result;

    return (
        <Container>
            <Tabs>
                <Tab active={activeTab === "restaurant"} onClick={() => setActiveTab("restaurant")}>
                    Restaurant Intelligence
                </Tab>
                <Tab active={activeTab === "menu"} onClick={() => setActiveTab("menu")}>
                    Menu Intelligence
                </Tab>
                <Tab active={activeTab === "analytics"} onClick={() => setActiveTab("analytics")}>
                    Menu Analytics
                </Tab>
            </Tabs>

            {activeTab === "restaurant" && (
                <RestaurantIntelligence metadata={extractedMenuData?.metadata} />
            )}
            {activeTab === "menu" && (
                <MenuIntelligence
                    categories={extractedMenuData?.categories}
                    ingredientsData={ingredientsData}
                />
            )}
            {activeTab === "analytics" && (
                <MenuAnalytics calculatedMenuData={calculatedMenuData} />
            )}
        </Container>
    );
};
