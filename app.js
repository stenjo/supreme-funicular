let express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express! are we now working?'));
app.listen(80);

