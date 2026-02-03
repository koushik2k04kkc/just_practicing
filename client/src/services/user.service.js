const BASE_URL = "http://localhost:3000";

export const LoginUser = async (userData) => {
    console.log("Sending user data to /api/login:", userData);
    const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData) 
    }); 
    return response.json();
};