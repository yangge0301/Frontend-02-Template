const http = require("http");

http.createServer((request,response) =>{

    let body = [];
    let str = "";
    request.on("error",(err)=>{
        console.log(err)
    }).on("data",(churk)=>{
        if(Buffer.isBuffer(churk)){

            body.push(churk.toString())
        }
        else{
            str+=churk;

        }
    }).on("end",()=>{
        // body = Buffer.concat(body).toString();
        response.writeHead(200,{'Content-Type':"text/plain"});
        response.end(`<html maa="a" >
    <head>
     
    </head>
    <body>
        <div id="mybox">hahahad</div>
    </body>
</html>`);
    })


}).listen(8088);
console.log("server started on 8088")
