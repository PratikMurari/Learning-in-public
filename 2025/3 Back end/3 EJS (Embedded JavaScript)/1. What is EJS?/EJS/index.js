import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  let type = "a weekday";
  let advice = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    advice = "you can relax!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
