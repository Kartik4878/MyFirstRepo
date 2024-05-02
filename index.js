const fs = require("fs");
const hbs = require("hbs");
const axios = require("axios");
const express = require("express");

const app = express();
app.use(express.static("./Public/index.html"));
hbs.registerPartials("./views/Partials");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", { name: "Kartik" });
})

app.get("/about", (req, res) => {
    const city = req.query.city;
    const { data } = axios.get("https://api.openweathermap.org/data/2.5/weather?id=1264733&appid=2aabcacb99d267097027237a773d9215");
    res.render("about", { city });
})

app.listen("8000", () => {
    console.log("listening to port 8000");
})