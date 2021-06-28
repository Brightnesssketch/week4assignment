const http = require("http");
http.get("http://jsonplaceholder.typicode.com/users", (res) =>{
   
    nameinfo ="";
res.on("data", (data) => {
    nameinfo+= data;
})
  
res.on('end', () => {
    nameinfo = JSON.parse(nameinfo);
    for(let i = 0; i < nameinfo.length; i++) {
        console.log(nameinfo[i].name);
    }
})
})