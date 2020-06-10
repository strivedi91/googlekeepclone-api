const swaggerJSDoc = require("swagger-jsdoc");
// swagger definition
var swaggerDefinition = {
  info: {
    title: "Google Keep Clone - API",
    version: "1.0.0",
    description: "CRUD APIs for Google Keep Clone Application",
  },
  host: "localhost:3100",
  basePath: "/",
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ["./routes/*.js"],
};
var swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
