var http = require('http');

var server= http.createServer(function(req,res){
    res.write("Welcome to Nodejs");
    console.log(req.headers);

    res.end();
});

server.listen(5000);

console.log("Server Connected and Listening on Ports 3000");
var transaction={

    id:1,
    date: new Date(),
    details:[/*initializing an array*/
        {
            receiver:"tola makinwa",
            sender:"semuel etoo",
            processedby:"admin",
            date: new Date()

        },
         {
            receiver:"james bat",
            sender:"ekene tobi",
            processedby:"admin",
            date: new Date()

        },
         {
            receiver:"tola makinwa",
            sender:"semuel etoo",
            processedby:"admin",
            date: new Date()

        }
    ]/*Array ends*/
}
// console.log(transaction.details[1].sender);/*accessing individual object.attributes value*/ 
    console.log("transaction is:"+ transaction.details[0].sender);
