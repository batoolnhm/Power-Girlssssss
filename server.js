 const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = "./users.json";


function getUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, "[]");
    return [];
  }

  const data = fs.readFileSync(USERS_FILE, "utf8").trim();

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Invalid users.json file. Resetting.");
    fs.writeFileSync(USERS_FILE, "[]");
    return [];
  }
}


function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, major } = req.body;

  if (!name || !email || !password || !major) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const users = getUsers();
  const exists = users.find(u => u.email === email);

  if (exists) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
    major
  });

  saveUsers(users);

  res.json({ message: "User registered successfully" });
});


app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      major: user.major
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
