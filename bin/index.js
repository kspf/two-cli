#!/usr/bin/env node
const vite = require('vite');
const path = require("path");
const fs = require("fs");
const arguments = process.argv.splice(2);

if (arguments[0] === "dev") {
  vite.createServer({
    configFile:  path.resolve(__dirname, "./../vite.config.js")
  }).then(serve => {
    serve.listen().then(() => {
      serve.printUrls()
    });
  }).catch(err => {
    console.error(err)
  })
} else if (arguments[0] === "demo") {
  vite.build({
    configFile:  path.resolve(__dirname, "./../vite.config.js")
  })
}
