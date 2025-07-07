import express from "express";
import axios from "axios";

const app=express();
const port=3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try{
        const response=await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
        const joke=response.data.joke;

        res.render("index",{joke:joke});
    }
    catch(error){
        console.error("Error:",error.message);
        res.status(500).send("couldn't find joke");
    }
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})