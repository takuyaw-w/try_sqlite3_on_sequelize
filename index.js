const db = require("./models/")

db.User.findAll().then(user => {
    if(!user) {
        console.log("error")
    } else {
        console.log(JSON.stringify(user))
    }
})