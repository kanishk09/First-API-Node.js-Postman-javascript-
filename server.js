var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

var ing = [
    {
        "id":"120",
        "text":"eggs"
    },
    {
        "id":"121",
        "text":"milk"
    },
    {
        "id":"122",
        "text":"bacon"
    },
    {
        "id":"123",
        "text":"juice"
    }
];

app.get('/ingre',function(request,response)
    {
        response.send(ing);
    });

app.post('/ingre',function(request,response)
    {
        var ing1 = request.body;
        if(!ing1 || ing1.text === "")
            {
                response.status(500).send({error:"you fool"});
            }
        else{
            ing.push(ing1);
            response.status(200).send(ing);
        }
    });

app.put('/ingre/:ingid',function(request,response)
    {
        var newtext = request.body.text;
        
    if( !text || text === "") 
        {
            response.status(500).send({error:"you fookin idiot"});
        }
    else
    {
        for (var x=0; x<ing.length; x++)
            {
                var i = ing[x];
                if(i.id === request.params.ingid)
                {
                    ing[x].text = newtext;
                    break;
                }
            }
        response.send(ing);
    }
        
    });

app.listen(3000,function()
    {
        console.log("fuck you from port 3000");       
    });