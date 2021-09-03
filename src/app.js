const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.port ||  3000;

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));


app.set('view engine', 'hbs');
app.set("views", view_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index");
})

app.get("*", (req, res) => {
    res.send("404 error page oops!!");  
})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})