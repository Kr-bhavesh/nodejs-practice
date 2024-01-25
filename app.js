const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
const bodyparser = require("body-parser");
const path = require("path");
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public")); //in order to use the static files present public directory
app.use(express.json());
app.use(router);
app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyparser.urlencoded({ extended: "false" }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/", "index.html"));
  //   res.send("Hello world from serius albus potter");
});
app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send("data received");
});
app.get("/engine", (req, res) => {
  res.render("list", { name: "Bhavesh" });
});
app.get("/r1", (req, res) => {
  console.dir(req.hostname); //ge the hostname
  console.dir(req.ip); //get ip
  console.dir(req.originalUrl);
  console.dir(req.params.name); //returns the name of parameter provided with route like /name currently i hadn't provided so it would return undefined
  console.dir(req.path); //simply returns the path
  console.dir(req.protocol); //protocol itself
  console.log(req.secure); //boolean value indiciating whether it's secure or not
  res.send("Hello world");
});
app.get("/route1", (req, res) => {
  res.format({
    //setting the content-type
    "text/plain"() {
      console.log(res.get("Content-Type")); //getting the content-type
      res.send("Hello from route1");
    },
  });
});
app.get("/route2", (req, res) => {
  res.send("Hello from route2"); //sending a response
});
app.get("/route3", (req, res) => {
  res.send("Hello from route3");
});
app.get("/download", (req, res) => {
  res.download("./Downloads/merge.txt", "merge.txt"); //files starts downloading to client's system
});
app.get("/json", (req, res) => {
  res.json({ name: "bhavesh" }); // sends a json response
});
app.get("/redirect", (req, res) => {
  res.redirect("/");
});
router.get("/r2", (req, res) => {
  res.send("just a regular router path");
});
router.get("/r4", (req, res, next) => {
  res.send("another regular route");
});
app.listen(port, () => {
  console.log("app is listening on specified port");
});
