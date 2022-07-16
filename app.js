let express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express! <h1>ARE actually now working!!</h1>'));
console.log('Hello Express')
app.listen(5000);

