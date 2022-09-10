const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/api.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

const listener = app.listen(8080, () => console.log(`App is running on port ${listener.address().port}`));
