import React from "react";
import PropTypes from "prop-types";
import {StyledInput, Label, InputFieldContainer} from "./InputField.style";

export const InputField = ({ label, value, onChange, name, placeholder }) => {
    return (
        <InputFieldContainer>
            <Label htmlFor={name}>{label}</Label>
            <StyledInput
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </InputFieldContainer>
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};
