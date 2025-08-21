import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const limiter = rateLimit({ windowMs: 60 * 1000, max: 30 });
app.use(limiter);

const studentsPath = path.join(__dirname, "students.json");
const students = JSON.parse(fs.readFileSync(studentsPath, "utf8"));

app.post("/api/lookup", (req, res) => {
  const { name, id } = req.body || {};
  if (!name || !id) {
    return res.status(400).json({ message: "Both name and student ID are required." });
  }
  const student = students.find(
    s => s.id.toLowerCase() === String(id).trim().toLowerCase()
      && s.name.toLowerCase() === String(name).trim().toLowerCase()
  );
  if (!student) {
    return res.status(404).json({ message: "No match found for that Name + ID." });
  }
  res.json({ name: student.name, class: student.class, enrollmentStatus: student.enrollmentStatus });
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
