import React from "react";

import {useLocation} from "react-router-dom";
import {MenuIntelligence} from "./components/MenuIntelligence";
import PropTypes from "prop-types";

export const MenuIntelligencePage = () => {
    const location = useLocation();
    const result = location.state?.result;

    if (!result) {
        return <p>No data available.</p>;
    }

    const categories = result.menuIntelligence?.categories || [];
    const ingredientsData = result.menuIntelligence?.ingredientsData || {};

    return (
        <div style={{ padding: "20px" }}>
            <h1>Menu Intelligence Tests</h1>
            <MenuIntelligence
                categories={categories}
                ingredientsData={ingredientsData}
            />
        </div>
    );
};

MenuIntelligencePage.propTypes = {
    categories: PropTypes.array.isRequired,
    ingredientsData: PropTypes.object.isRequired,
};
