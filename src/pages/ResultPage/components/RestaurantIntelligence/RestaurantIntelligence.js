import React from "react";
import PropTypes from "prop-types";
import { CardBody, List } from "./RestaurantIntelligence.style";
import { Heading } from "../../../../components/Heading";
import theme from '../../../../theme';

export const RestaurantIntelligence = ({ metadata }) => {
    const primaryCuisine = metadata?.cuisine?.primary || "N/A";
    const secondaryCuisineRaw = metadata?.cuisine?.secondary;
    let secondaryCuisineDisplay = "N/A";

    if (Array.isArray(secondaryCuisineRaw)) {
        secondaryCuisineDisplay = secondaryCuisineRaw.length > 0
            ? secondaryCuisineRaw.join(", ")
            : "Not Specified"; // show Not Specified when agent returns an empty array
    } else if (typeof secondaryCuisineRaw === 'string' && secondaryCuisineRaw.trim().length > 0) {
        secondaryCuisineDisplay = secondaryCuisineRaw;
    } else if (secondaryCuisineRaw == null) {
        secondaryCuisineDisplay = "N/A";
    } else {
        secondaryCuisineDisplay = String(secondaryCuisineRaw);
    }

    const restaurantProfile = metadata?.restaurantProfile || "Not Specified";
    const keyInsights = metadata?.keyInsights || "Not Specified";
    const priceTier = metadata?.priceTier || "Not Specified";
    const diningStyle = metadata?.diningStyle || "Not Specified";
    const targetDemographic = metadata?.targetDemographic || "Not Specified";
    const marketPositioning = metadata?.marketPositioning || "Not Specified";

    const specialityDishes = Array.isArray(metadata?.specialityDishes) ? metadata.specialityDishes : [];

    return (
        <div>
            <Heading size="xl" title="Restaurant Intelligence" color={theme.palette.primary.main} />
            <CardBody>
                <p>
                    <Heading size="base" title="Primary Cuisine:" color={theme.palette.secondary.main} />
                    {primaryCuisine}
                </p>
                <p>
                    <Heading size="base" title="Secondary Cuisine:" color={theme.palette.secondary.main} />
                    <strong></strong> {secondaryCuisineDisplay}
                </p>
                <p>
                    <Heading size="base" title="Restaurant Profile:" color={theme.palette.secondary.main} />
                    {restaurantProfile}
                </p>
                <p>
                    <Heading size="base" title="Key Insights:" color={theme.palette.secondary.main} />
                    {keyInsights}
                </p>
                <p>
                    <Heading size="base" title="Price Tier:" color={theme.palette.secondary.main} />
                    {priceTier}
                </p>
                <p>
                    <Heading size="base" title="Dining Style:" color={theme.palette.secondary.main} />
                    {diningStyle}
                </p>
                <p>
                    <Heading size="base" title="Target Demographic:" color={theme.palette.secondary.main} />
                    {targetDemographic}
                </p>
                <p>
                    <Heading size="base" title="Market Positioning:" color={theme.palette.secondary.main} />
                    {marketPositioning}
                </p>
                {specialityDishes.length > 0 && (
                    <>
                        <Heading size="base" title="Specialty Dishes:" color={theme.palette.secondary.main} />
                        <List>
                            {specialityDishes.map((dish) => (
                                <li key={dish}>{dish}</li>
                            ))}
                        </List>
                    </>
                )}
            </CardBody>
        </div>
    );
};

RestaurantIntelligence.propTypes = {
    metadata: PropTypes.object.isRequired,
};
