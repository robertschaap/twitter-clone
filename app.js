const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () =>
    console.log(`Listening on port ${myport}`)
);

// Views
app.set('view engine', 'pug');
app.use(express.static('public'));

// Controllers
app.use(require('./controllers'));
