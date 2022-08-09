const express = require("express");
const app = express();

const https = require("https");






app.get("/", function(req, res){
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=Kerala&appid=8d31b17971fa4163d2bdd48c769464b1&units=metric#")
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const status = weatherData.weather[0].main
            const image = weatherData.weather[0].icon
            res.write("<h1>the weather in kerala is mostly ." + status +"</h1>")
            res.write("<p>todays temperature is " + temp + "degree Celcious  </p>")
            const imgurl = "http://openweathermap.org/img/wn/" + image + "@2x.png"
            res.write("<img src="+ imgurl +">")
             res.send();
        })
    })
})


app.listen(3000, function(){
    console.log("server started at port 3000")
})