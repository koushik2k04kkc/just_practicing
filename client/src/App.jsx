import React, { useState } from "react";
import { LoginUser } from "./services/user.service";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // ← very important - prevents page reload

        // Basic validation (you can make it stricter)
        if (!username.trim() || !password.trim()) {
            setError("Please fill in both fields");
            return;
        }

        setError("");
        setLoading(true);

        const userData = {
            username: username.trim(),
            password: password.trim(),
        };

        try {

           const result = await LoginUser(userData);   
            setSuccess(true);
            console.log("Login successful:", result);

        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "380px", margin: "60px auto", padding: "20px" }}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "16px" }}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                        style={{ width: "100%", padding: "10px" }}
                    />
                </div>

                <div style={{ marginBottom: "16px" }}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        style={{ width: "100%", padding: "10px" }}
                    />
                </div>

                {error && (
                    <p style={{ color: "red", margin: "10px 0" }}>{error}</p>
                )}

                {success && (
                    <p style={{ color: "green", margin: "10px 0" }}>
                        Login successful! Redirecting...
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: loading ? "#aaa" : "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: loading ? "not-allowed" : "pointer",
                    }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            {/* Optional: link to register / forgot password */}
        </div>
    );
};

export default App;