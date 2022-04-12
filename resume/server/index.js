import express from "express";
const app = express();
const PORT = process.env.PORT || 8001;
import bp from "body-parser"

app.use(bp.json())
app.use(bp.urlencoded({extended : true}))
app.post("/formdata", (req, res) => {
  console.log(req.body);
  res.status(200).json({ body: req.body });
});

app.listen(PORT, "localhost", (error) => {
  if (!error) {
    console.log(`Server is running on port : ${PORT}`);
  } else {
    console.log({ error });
  }
});
