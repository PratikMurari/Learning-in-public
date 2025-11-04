import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

//Steps Creating an Express Server
// 1. Create directory
// 2. Create index.js file
// 3. initialize npm using npm init -y
// 4. Install express package, using npm install express
// 5. Write server application in index.js
// 6. Start server using node index.js

//how to check if port is already in use
//netsat -ano | findstr "LISTENING"  Windows Command to check port usage
//sudo lsof -i -P -n | grep LISTEN  Mac Command to check port usage
