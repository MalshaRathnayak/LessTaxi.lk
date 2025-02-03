import axios from "axios";


const inquiryApi = axios.create({
  baseURL: process.env.REACT_APP_INQUIRY_API_URL, 
  timeout: 5000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to create an inquiry
export const createInquiry = async (formData) => {
  try {
    const response = await inquiryApi.post("/inquiry", formData);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error creating inquiry:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export default inquiryApi;
