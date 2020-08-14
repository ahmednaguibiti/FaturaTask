const express = require('express'),
      app = express(),
      db = require('./database/connection'),
      routes = require('./routes/router');

      

// Application Routes
app.use(routes);


// Database Connection
db.authenticate()
.then(() => {
    console.log("connected successfully");
    app.listen(3000, () => {
        console.log('listen.....');
    });
    
}).catch(error => {
    console.log(error)
});


