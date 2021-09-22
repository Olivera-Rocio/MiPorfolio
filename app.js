const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./routers/main");

/* recursos estaticos */
app.use(express.static("public"));

/*configuracion del motor de plantillas*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*rutas */
app.use("/", mainRouter);

/*servidor */
app.listen(3030, () => console.log("servidor corriendo"));