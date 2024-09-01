const ServerlessHttp = require("serverless-http");
const app = require("./index");

module.exports.hello = ServerlessHttp(app);
