import React from "react";
import PropTypes from "prop-types";
import { CardBody, ItemWrapper, IngredientItem, IngredientList, Metric } from "./MenuAnalytics.style";
import { Heading } from "../../../components/Heading";
import theme from '../../../theme';

export const MenuAnalytics = ({ calculatedMenuData }) => {
  const { mostExpensiveDish, leastExpensiveDish, mostCommonIngredients } = calculatedMenuData ?? {};

  const topIngredients = mostCommonIngredients
    ? Object.entries(mostCommonIngredients).sort((a, b) => b[1] - a[1]).slice(0, 20)
    : [];

  return (
    <div>
      <Heading size="xl" title="Menu Analytics" color={theme.palette.primary.main} />
      <CardBody>
        {mostExpensiveDish && (
          <ItemWrapper>
            <Heading size="base" title="Most Expensive Dish:" color={theme.palette.secondary.main} />
            <p>
              {mostExpensiveDish.name} (
              {mostExpensiveDish.prices && mostExpensiveDish.prices.length
                ? `$${mostExpensiveDish.prices.join(", $")}`
                : "N/A"}
              )
            </p>
            {mostExpensiveDish.description && <p>{mostExpensiveDish.description}</p>}
          </ItemWrapper>
        )}

        {leastExpensiveDish && (
          <ItemWrapper>
            <Heading size="base" title="Least Expensive Dish:" color={theme.palette.secondary.main} />
            <p>
              {leastExpensiveDish.name} (
              {leastExpensiveDish.prices && leastExpensiveDish.prices.length
                ? `$${leastExpensiveDish.prices.join(", $")}`
                : "N/A"}
              )
            </p>
            {leastExpensiveDish.description && <p>{leastExpensiveDish.description}</p>}
          </ItemWrapper>
        )}

        {topIngredients.length > 0 && (
          <ItemWrapper>
            <Heading size="base" title="Top Ingredients:" color={theme.palette.secondary.main} />
            <IngredientList>
              {topIngredients.map(([ingredient, count]) => (
                <IngredientItem key={ingredient}>
                  {ingredient} ({count})
                </IngredientItem>
              ))}
            </IngredientList>
          </ItemWrapper>
        )}

        <ItemWrapper>
          <Heading size="base" title="Other Metrics:" color={theme.palette.secondary.main} />
          {Object.entries(calculatedMenuData || {})
            .filter(
              ([key]) => !["mostExpensiveDish", "leastExpensiveDish", "mostCommonIngredients"].includes(key)
            )
            .map(([key, value]) => (
              <Metric key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}</strong>: {" "}
                {typeof value === "object" ? JSON.stringify(value) : String(value)}
              </Metric>
            ))}
        </ItemWrapper>
      </CardBody>
    </div>
  );
};

MenuAnalytics.propTypes = {
  calculatedMenuData: PropTypes.object.isRequired,
};

