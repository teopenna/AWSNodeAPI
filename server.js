const hapi = require("hapi");

const host = "localhost";
const port = 3000;

const server = hapi.Server({
  host: host,
  port: port
});

const init = async () => {
  await server.start();
  console.log("Server up and running at port: " + port);
};

// Set up the routes
require("./routes/routes")(server);

init();
