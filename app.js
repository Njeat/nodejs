const express = require("express");
const app = express();

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {});

app.get("/login", (req, res) => {});

app.listen(3000, function () {
    console.log("서버 가동");
});