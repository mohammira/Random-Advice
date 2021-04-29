const express = require("express");
const path = require('path');
var request = require("request");
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/getadvice",(req,res) => {
    request('https://api.adviceslip.com/advice',
            function(error,response,body){
                if(!error && response.statusCode==200)
                    var parsed = JSON.parse(body)
                    var advice = parsed["slip"]["advice"]
                    res.send({advice});
            }
    )
});

app.listen(port,() => console.log(`Listening on port ${port}`));