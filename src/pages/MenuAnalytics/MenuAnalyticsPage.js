import {MenuAnalytics} from "./components";
import PropTypes from "prop-types";

export const MenuAnalyticsPage = ({ body }) => {
    return (
            <MenuAnalytics calculatedMenuData={body} />

    );
};

MenuAnalyticsPage.propTypes = {
    calculatedMenuData: PropTypes.object.isRequired,
};