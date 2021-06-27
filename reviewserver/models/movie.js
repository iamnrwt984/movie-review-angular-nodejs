const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var Comment = new Schema(
    {
        rating : {
        
            type : Number,
            min : 0 ,
            max : 10 ,
            required : true 
        } ,
        comment : {
            type : String ,
            required : true
        } ,
        author : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "user"

        }
    }
)

var movies = new Schema(
    {
        id : {
            type : String
        } ,
        original_title : {
            type : String
        } ,
        overview : {
            type : String
        },
        poster_path : {
            type : String
        } ,
        release_date : {
            type : String
        } ,
        vote_average : {
            type : String
        } ,
        vote_count : {
            type : String
        } ,
        Comments : {
            type : [Comment]
        } ,
        posterlink : {
            type : String
        }

    }
)


module.exports = mongoose.model("movies" , movies);