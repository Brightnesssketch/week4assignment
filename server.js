// const http = require("http");
// const server = http.createServer( (req, res) =>{
//     console.log("Request sent");
//     res.setHeader("content-type",  "text/html");
// res.write("<h1> BUZUGBE BRIGHT </h1>");
// res.end();
// })
// server.listen(3000, "localhost", () =>{
//     console.log("Listening for requests on port 3000");
// });

const http = require("http");

const fs = require("fs");
const server = http.createServer( (req, res) =>{
    console.log("Request sent");
    res.setHeader("content-type",  "text/html");
fs.readFile("index.html", (err, data) => {
    if (err){
        console.log(err);
        res.end();
    }else {
        res.write(data);
        res.end();
    }
})
})
server.listen(3000, "localhost", () =>{
    console.log("Listening for requests on port 3000");
});
