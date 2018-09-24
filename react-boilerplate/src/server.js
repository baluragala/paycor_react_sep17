import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import App from "./App";

const app = express();
function ServerComponent() {
  return <h1>This is server response</h1>;
}

app.get("/", function(req, res) {
  const vdom = ReactDOM.renderToString(<App />);
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack & React</title>
  </head>
  <body>
    <div id="root">
    ${vdom}
    </div>
    <script type="text/javascript" src="main.js"></script>
  </body>
  </html>
  `;
  res.send(html);
});

app.use(express.static(__dirname));

app.listen(3000, function() {
  console.log("SSR is up");
});
