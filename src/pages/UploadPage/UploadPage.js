import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {InputField} from "../../components/InputField";
import {FileUpload} from "../../components/FileUpload";
import { Button } from "../../components/Button";
import {PageContainer, Title} from "./UploadPage.style";

export const UploadPage = () => {
    const [userId, setUserId] = useState("");
    const [searchText, setSearchText] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!userId || !searchText || !file) {
            alert("Please fill all fields and upload an image.");
            return;
        }

        navigate("/loading", { state: { userId, searchText, file } });
    };

    return (
        <PageContainer>
            <Title>Restaurant Analytics API</Title>
            <InputField
                label="User ID"
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
            />
            <InputField
                label="Search Text"
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Enter search query"
            />
            <FileUpload onChange={(e) => setFile(e.target.files[0])} />
            <Button label="Submit" onClick={handleSubmit} />
        </PageContainer>
    );
};