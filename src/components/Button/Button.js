import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

export const Button = ({ onClick, label, disabled }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {label}
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};
