export const UserReport = (req, res) => {
  console.log("inside controller");
  res.status(200).json({ mes: "all ok done again!" });
};

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
};

export const RegisterUser = (req, res) => {
  const { username, password, email } = req.body;
  console.log("Register attempt:", username);
  console.log("Register attempt:", password);
  console.log("Register attempt:", email);
  // Here you would normally handle user registration logic
  // res.status(201).json({ message: "User registered successfully", user: { username, email } });
};

export const UpdateUserProfile = (req, res) => {
  const { userId, newProfileData } = req.body;
  console.log("Update profile for user ID:", userId);

  console.log("New profile data:", newProfileData);
  // Here you would normally handle updating the user profile
  // res.status(200).json({ message: "User profile updated successfully", userId, newProfileData });
};
