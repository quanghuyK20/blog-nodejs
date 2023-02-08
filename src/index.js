const path = require('path');
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const morgan = require('morgan');
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan("combined"));

//template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port);
