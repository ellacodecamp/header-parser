"use strict";

var express = require("express");

var app = express();
require("dotenv").load();

app.get("/api/whoami", function(req, res) {
  var ret = {
    "ipaddress": null,
    "language": null,
    "software": null
  };

  var userAgent = req.headers["user-agent"];
  var acceptLang = req.headers["accept-language"];
  var clientIp = req.headers["x-forwarded-for"];
  var softwareMatch = (userAgent)? userAgent.match(/^.*?\((.*?)\)/) : null;
  var software = (softwareMatch && softwareMatch.length > 1)? softwareMatch[1] : null;
  var languageMatch = (acceptLang && acceptLang.length > 1)? acceptLang.match(/^(.*?),/) : null;
  var language = (languageMatch)? languageMatch[1] : null;
  if (!clientIp || !software || !language) {
  	res.status(500).send();
  	return;
  }

  ret.ipaddress = clientIp;
  ret.language = language;
  ret.software = software;

  res.end(JSON.stringify(ret));
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log("Node.js listening on port " + port + "...");
});