var http=require("http")
var fs=require("fs")
var formidable=require("formidable")
http.createServer(function(req,res){
    //home page
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<form action='biodata' method='post' enctype='multipart/form-data'>");
        res.write('<h1>Register Here</h1>');
        res.write('Name <input type="text" name="uname" ><br>');
        res.write('DOB <input type="date" name="dob" ><br>');
        res.write('Qualification <input type="text" name="qual" ><br>');
        res.write('Email <input type="email" name="email" ><br>');
        
        res.write('<input type="Submit" value="Submit">');
        res.end();
    }
    //user response page-->/biodata
    else if(req.url=='/biodata')
    {
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name : ' +fields.uname+'</h1><br>');
            res.write('<h1>DOB : ' +fields.dob+'</h1><br>');
            res.write('<h1>Qualification : ' +fields.qual+'</h1><br>');
            res.write('<h1>Email : ' +fields.email+'</h1><br>');
            
            
        
        })
    }
    else{
        res.end('<h1>404 page note found!</h1>');
    }
}).listen(3000);
