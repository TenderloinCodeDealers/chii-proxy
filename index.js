const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/:id", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Listening on port ${port}!`));
