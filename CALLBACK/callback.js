const callback=function(a,b){
    return a+b;
}


function adding(callback){
    console.log(callback(12,33));
}
adding(callback);