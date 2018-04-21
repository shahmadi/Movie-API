var express=require("express");

var app=express();

var request=require("request");

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
})

app.get("/results",function(req,res){
    console.log(req.query);
    var query=req.query.search;
    
    request("http://omdbapi.com/?s="+query+"&apikey=thewdb",function(error,response,body){
        if(!error && response.statusCode==200){
        var data=JSON.parse(body);
        
        res.render("results",{data:data});
        }
    });
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie app Server Started!");
})