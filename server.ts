import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
const PORT = 3000;

// Initialize SQLite Database
const db = new Database("hospital.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender TEXT NOT NULL,
    admission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    history TEXT,
    contact TEXT
  )
`);

app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/patients", (req, res) => {
  try {
    const patients = db.prepare("SELECT * FROM patients ORDER BY admission_date DESC").all();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
});

app.post("/api/patients", (req, res) => {
  const { name, age, gender, history, contact } = req.body;
  if (!name || !age || !gender) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const info = db.prepare("INSERT INTO patients (name, age, gender, history, contact) VALUES (?, ?, ?, ?, ?)").run(name, age, gender, history, contact);
    res.json({ id: info.lastInsertRowid, message: "Patient admitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to admit patient" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
