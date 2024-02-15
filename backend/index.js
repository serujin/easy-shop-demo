const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const cors = require("cors");

const PORT = 3000;
const app = express();
const data = require("./database.json");

app.use(cors());
app.use("/", jsonGraphqlExpress.default(data));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
