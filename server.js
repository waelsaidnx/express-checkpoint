const express = require('express')

const app = express()

function IsTimeRight(req, res, next){
    var a= Date.now();
    var b= new Date(a);
    var time= b.getHours();
    var day= b.getDay();
    var weekDay=b.toDateString();
    console.log("the day is :" + day );
    console.log("the time is :" + time);
    if (day!==6 && day!==0 && time<18 && time>9) {
        next();
    } else {
        res.send("oops, We are currently closed , we will be open from Monday to Friday between 9 Am and 7 Pm. Please come back later");
    }
}
// app.get('/' , IsTimeRight, (req, res)=>{
// res.sendFile(__dirname + "/public/home.html")
// })
// app.get('/services.html' , IsTimeRight, (req, res)=>{
//     res.sendFile(__dirname + "/public/services.html")
//     })
//     app.get('/contact.html' , IsTimeRight, (req, res)=>{
//         res.sendFile(__dirname + "/public/contact.html")
//         })

       
app.use(IsTimeRight, express.static(__dirname + "/public"))

const port = process.env.PORT || 9000

app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on port http://localhost:${port}`)
})