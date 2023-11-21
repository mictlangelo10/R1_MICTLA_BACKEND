require("dotenv").config();
const http = require("http");
const app = require("./index"); // Asegúrate de que la ruta al archivo index.js sea correcta
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
