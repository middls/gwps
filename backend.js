const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
var busboy = require('connect-busboy'); 

const app = express();

// Body parser
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(busboy());
app.use(cors());

// Use Routes

app.get("/api/", (req, res) => { 
    res.status(200).json({
        error: false,
        msg: "На указанный Вами адрес электронной почты было отправлено письмо с простыми инструкциями для завершения регистрации."
    });
});

const port = process.env.PORT || "3005";

app.listen(port, () => console.log(`Server is up on port ${port}...`));
