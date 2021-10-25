import express from "express";

const app = express();
const port = 5000;

// app.get('/', (req, res)=> {
// res.send('Hi people');
// })
//  ODER
// app.get("/", (req, res)=> res.send("OKEY"))
//  ODER

app.get("/", (req, res) => {
  res.send({ status: 200, message: "HI" });
  res.end();
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
