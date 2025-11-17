import React from "react";
import { LoaderContainer, Spinner, Message } from "./Loader.style";
import PropTypes from "prop-types";

export const Loader = ({ text }) => (
    <LoaderContainer>
        <Spinner />
        <Message>{text || "Processing your request..."}</Message>
    </LoaderContainer>
);

Loader.propTypes = {
    text: PropTypes.string,
};
