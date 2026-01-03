import express from "express";
import cors from "cors";
import {databaseManager} from "@/db";
export const app = express();

app.use(cors());
app.use(express.json());

// GET endpoint to fetch all users
app.get("/api/users", async (req, res) => {
  const prisma = databaseManager.getInstance();
  const users = await prisma.user.findMany();

  res.json(users);
});

// POST endpoint to create a new user
app.post("/api/users", async (req, res) => {
  const {name, email} = req.body;

  if (!name || !email) {
    res.status(400).json({error: "Name and email are required"});
    return;
  }

  const prisma = databaseManager.getInstance();

  try {
    const user = await prisma.user.create({data: {name, email}});
    res.status(201).json(user);
  } catch {
    res.status(500).json({error: "Failed to create user"});
    return;
  }
});

// GET endpoint to fetch all users (3 second delay)
app.get("/api/users-delay", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  const prisma = databaseManager.getInstance();
  const users = await prisma.user.findMany();

  res.json(users);
});

// Endpoints to simulate internal server errors (GET / POST)
app.get("/api/error", (req, res) => {
  res.status(500).json({error: "Internal Server Error"});
});
app.post("/api/error", (req, res) => {
  res.status(500).json({error: "Internal Server Error"});
});
