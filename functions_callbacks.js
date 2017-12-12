/**
 * Working with Functions
 */


function testing(argument) {
    console.log("from a function");
}
testing();

/*implementing callback functions*/


function perform(a,b,callback){
    var c= b*b+a;
    callback(c);
}

perform(2,4,function(result){
    console.log(result);
})

function errorCode(a,b,callback){
    // do cal

    var errorCode= 102;

    callback(errorCode,'Internal server Error');
}
errorCode(10,2,function(err,msg){
    if(err){
        console.log(msg);
    }
})

