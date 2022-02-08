const express = require("express");
const bookAPI = express();
bookAPI.get("/", (request, response) => {
  response.json({ message: "server is working" });
});
bookAPI.listen(3000, () => {
  console.log("working");
});
