let express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express! are we now working?'));
console.log('Hello Express')
app.listen(80);

