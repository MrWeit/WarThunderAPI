//Imports
const express = require("express");
const getData = require("./getData");

//Instances
const api = express();

//Vareables
var expressPort = 3000;

api.get('/data/:name', async function (req, res) {
    const name = req.params.name;

    getData.run(name, function(data, err){
        if(err){
            return res.status(400).send({error: err})
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
  })

//Sets the express port
api.listen(expressPort, () => {
    console.log("API: Express listening on port 3000");
});