import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    Category,
    CategoryHeader,
    ItemWrapper,
    IngredientItem,
    IngredientList,
    Wrapper,
} from "./MenuIntelligence.style";
import { Heading } from "../../../components/Heading";
import theme from '../../../theme';

export const MenuIntelligence = ({ categories, ingredientsData }) => {
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (name) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const dishIngredientsMap = {};
    ingredientsData?.dishIngredients?.forEach((item) => {
        dishIngredientsMap[item.dishName] = item.ingredients;
    });

    return (
        <Wrapper>
            <Heading size="xl" title="Menu Intelligence" color={theme.palette.primary.main} />
            {categories.map((category) => (
                <Card key={category.name}>
                    <Category>
                        <CategoryHeader onClick={() => toggleCategory(category.name)}>
                            <Heading size={'base'} title={`${category.name} (${category.dishes.length})`} />
                        </CategoryHeader>

                        {expandedCategories[category.name] && (
                            <CardBody>
                                {category.dishes.map((dish) => (
                                    <ItemWrapper key={dish.name}>
                                        <Heading size={'sm'} title={dish.name} color={theme.palette.secondary.main}/>
                                        {dish.prices?.length ? `($${dish.prices.join(", ")})` : ""}
                                        {dish.description && <p>{dish.description}</p>}

                                        {dishIngredientsMap[dish.name]?.length > 0 && (
                                            <IngredientList>
                                                {dishIngredientsMap[dish.name].map((ingredient) => (
                                                    <IngredientItem key={ingredient}>{ingredient}</IngredientItem>
                                                ))}
                                            </IngredientList>
                                        )}
                                    </ItemWrapper>
                                ))}
                            </CardBody>
                        )}
                    </Category>
                </Card>
            ))}
        </Wrapper>
    );
};

MenuIntelligence.propTypes = {
    categories: PropTypes.array.isRequired,
    ingredientsData: PropTypes.object.isRequired,
};
