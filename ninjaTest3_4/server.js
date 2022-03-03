const fs = require('fs');
const http = require('http');

//Opretter served med req/res 
//Hvis du logger req får du hele request objektet
//Log med req.url, req.method og så får du din url med metoden som du bruger, f.eks GET
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    //Set header content type
    res.setHeader('Content-Type','text/html');
    
    fs.readFile('./views/index.html',(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            
        }
    })
});

//Funktion som siger at serveren lytter efter requests på porten og portnummeret.
server.listen(5000, 'localhost', ()=>{
    console.log('Lytter til requests på port 5000')
});

