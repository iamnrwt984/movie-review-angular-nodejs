const mongoose = require("mongoose");
const movies = require("../models/movie")
const Schema = mongoose.Schema;



 /* var favourite = new Schema(
    {
        movie : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "movies"

        }
    
    }
)
*/

var user = new Schema(
    {
        email : {
            type : String
        } ,
        password : {
            type : String
        } ,
        favourites : {
            type : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : "movies"
            }] ,
        } ,
        reviewed_movies : {
            type : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : "movies"
            }]
            
        }
       
    
        
        
    }
)

module.exports = mongoose.model("user" , user);