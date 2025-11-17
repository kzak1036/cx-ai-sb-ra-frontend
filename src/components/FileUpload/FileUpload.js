import React from "react";
import PropTypes from "prop-types";
import { UploadContainer, FileLabel } from "./FileUpload.style";

export const FileUpload = ({ onChange }) => {
    return (
        <UploadContainer>
            <FileLabel htmlFor="fileInput">Upload Image:</FileLabel>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={onChange}
            />
        </UploadContainer>
    );
};

FileUpload.propTypes = {
    onChange: PropTypes.func.isRequired,
};
