const express = require("express");
var request = require("request");
const app = express();
const port = 5000;

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