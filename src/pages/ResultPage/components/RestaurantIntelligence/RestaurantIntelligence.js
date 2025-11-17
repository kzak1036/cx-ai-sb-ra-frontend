import React from "react";
import PropTypes from "prop-types";
import { CardBody, List } from "./RestaurantIntelligence.style";
import { Heading } from "../../../../components/Heading";
import theme from '../../../../theme';

export const RestaurantIntelligence = ({ metadata }) => {
    return (
        <div>
            <Heading size="xl" title="Restaurant Intelligence" color={theme.palette.primary.main} />
            <CardBody>
                <p>
                    <Heading size="base" title="Primary Cuisine:" color={theme.palette.secondary.main} />
                    {metadata.cuisine.primary || "N/A"}
                </p>
                <p>
                    <Heading size="base" title="Secondary Cuisine:" color={theme.palette.secondary.main} />
                    <strong></strong> {metadata.cuisine.secondary || "N/A"}
                </p>
                <p>
                    <Heading size="base" title="Restaurant Profile:" color={theme.palette.secondary.main} />
                    {metadata.restaurantProfile}
                </p>
                <p>
                    <Heading size="base" title="Key Insights:" color={theme.palette.secondary.main} />
                    {metadata.keyInsights}
                </p>
                {metadata.specialityDishes && metadata.specialityDishes.length > 0 && (
                    <>
                        <Heading size="base" title="Specialty Dishes:" color={theme.palette.secondary.main} />
                        <List>
                            {metadata.specialityDishes.map((dish) => (
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
