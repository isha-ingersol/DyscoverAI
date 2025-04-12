const BASE_URL = "http://127.0.0.1:5000"; // Flask backend URL

export async function uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch(`${BASE_URL}/predict`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Server error. Could not process the request.");
        }

        return await response.json(); // Convert API response to JSON
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}