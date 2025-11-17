import {axiosInstance} from "../config/axiosInstance";

export const runAgent = async (formData) => {
    const response = await axiosInstance.post("api/agent/run", formData, {
        headers: { "Content-Type": "multipart/form-data",
                    Accept: "application/json"},
    });
    if (!response.data) {
        return { message: "No data returned from backend" };
    }

    if (typeof response.data === "object") {
        return response.data;
    }

    if (typeof response.data === "string") {
        try {
            return JSON.parse(response.data);
        } catch {
            return { message: response.data };
        }
    }
    return { message: "Unknown response format", raw: response.data };
};
