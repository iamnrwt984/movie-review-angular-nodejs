var cors = require("cors")


const whitelist = [ "http://localhost:3000","https://localhost:3443", 'http://localhost:4200']

corsoptionsdelegate = (req , cb) => {
    var corsoptions

    if(whitelist.indexOf(req) !== -1){
        console.log("found")
        corsoptions = {origin : true}
    }
    else{ corsoptions ={origin : false} }

    cb(null , corsoptions)
};

exports.cors = cors()
exports.corswithoptions = cors(corsoptionsdelegate)