import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import App from "./App.js";

const PORT = process.env.PORT || 3008;
const app = express();

// app.use(express.static("../server-build"));
//app.use('/static', express.static(path.join(__dirname, '../server-build')))
app.use('/static', express.static('public'))


app.get("/*", (req, res) => {
  const context = {};


    console.log("url: ", req.url);
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context} >
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
  
    const indexFile = path.join(__dirname,"./index.html");

    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  

  
});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
