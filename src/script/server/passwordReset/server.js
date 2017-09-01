/* const fs = require("fs");
const express = require("express");
const app = express.createServer();

app.use(express.static(__dirname));
app.use(require("sesame")()); // for sessions

const forgot = require("../../")({
    uri: "http://localhost:8080/passwordReset",
    from: "annik.obmannik@gmail.com",
    host: "localhost", port: 25,
});
app.use(forgot.middleware);

app.post("/forgot", express.bodyParser(), function(req, res) {
    const email = req.body.email;
    const reset = forgot(email, function(err) {
        if (err) { res.end("Error sending message: " + err); } else { res.end("Check your inbox for a password reset message."); }
    });

    reset.on("request", function(req_, res_) {
        req_.session.reset = { email: email, id: reset.id };
        fs.createReadStream(__dirname + "/forgot.html").pipe(res_);
    });
});

app.post("/reset", express.bodyParser(), function(req, res) {
    if (!req.session.reset) { return res.end("reset token not set"); }

    const password = req.body.password;
    const confirm = req.body.confirm;
    if (password !== confirm) { return res.end("passwords do not match"); }

    // update the user db here

    forgot.expire(req.session.reset.id);
    delete req.session.reset;
    res.end("password reset");
});

app.listen(8080);

module.exports = app;
console.log("Listening on :8080"); */



import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../../../../webpack.config";
import webpackHotMiddleware from "webpack-hot-middleware";

import forgot from "./routes/forgot";
import reset from "./routes/reset";

let app = express();


app.use(bodyParser.json());

app.post("/api/forgot", forgot);
/* app.use("/api/auth", reset); */

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../../dist/index.html"));
});

app.listen(3000, () => console.log("3000"));
