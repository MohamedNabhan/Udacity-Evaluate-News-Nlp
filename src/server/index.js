const dotenv = require("dotenv")
dotenv.config()

var path = require("path")
const mockAPIResponse = require("./mockAPI.js")
const cors = require("cors")
const bodyParser = require("body-parser")
const request = require("request")

const express = require("express")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static("dist"))
console.log(__dirname)

app.use(cors());
const port= 3000;


const listening = () => {
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

//GET
app.listen(port, listening)

app.get("/", res => res.sendFile("dist/index.html"))


//post
const postData = (req, res) => {
        const {formText} = req.body;
      
        const requestOptions = {
          method: "POST",
          credentials: 'same-origin',
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({
            key: process.env.API_KEY,
            url: formText,
            lang: "auto",
          }),
        };
        request(requestOptions, (body, response, error) => {
        res.send(body);
          console.log("error", error);
        });

}

app.post("/test", postData);