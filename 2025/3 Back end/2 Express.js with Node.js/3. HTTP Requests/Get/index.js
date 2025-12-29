import express from "express";
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   console.log(req.rawHeaders);  // Logs all raw headers
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  // about page route endpoint
  res.send("<h1>About Me</h1><p>This is the about page</p>");
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Page</h1><p>This is the contacts page</p><p>+91 1234567890</p>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
