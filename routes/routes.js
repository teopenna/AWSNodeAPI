module.exports = function(server) {
  server.route({
    method: "GET",
    path: "/about",
    handler: function(request, h) {
      var data = {
        message: "Welcome to super Node.js based API"
      };

      return data;
    }
  });
};
