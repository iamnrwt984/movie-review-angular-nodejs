 
var config = require("./config");
var strategy = require("passport-jwt").Strategy;
var extractjwt = require("passport-jwt").ExtractJwt;
var passport = require("passport");
var user = require("./models/users")


passport.use(new strategy({jwtFromRequest : extractjwt.fromAuthHeaderAsBearerToken() , secretOrKey : config.secret} , (payload , done) => {
    console.log("payload : " , payload)
    user.findOne({email : payload.user})
    .then((doc) => {
        console.log("user founded jwt")
        console.log("doc is not empty" , doc)
        if(doc !== null){
            console.log("doc : " , doc)
            return done(null , doc)
        }
        else{
            return done(null , false)
        }
    })
    .catch((err) => {
        return done(err , false)
    })
}))


exports.verifyuser = passport.authenticate("jwt" , {session : false})

