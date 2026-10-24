const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
app.use(cookieParser());
app.use(session({
    secret: "abc",
    resave: false,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    res.cookie("user", "Ravi");

    if (!req.session.count) {
        req.session.count = 0;
    }

    req.session.count++;

    res.send("Cookie: " + (req.cookies.user || "Ravi") +
        "<br>Visits: " + req.session.count);
});

app.listen(3000);
