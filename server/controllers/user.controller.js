export const UserReport = (req, res) => {
    console.log('inside controller');
    res.status(200).json({ mes: "all ok done again!" });
}

export const LoginUser = (req, res) => {
    const { username, password } = req.body;
    console.log("Login attempt:", username);    
    console.log("Login attempt:", password);    
    // Here you would normally validate the user credentials
    // if (username === "admin" && password === "password") {
    //     res.status(200).json({ message: "Login successful", user: { username } });
    // } else {
    //     res.status(401).json({ message: "Invalid username or password" });
    // }   
}   