const express = require('express');
const app = new express();
//Add method (Step 3)
const dotenv = require("dotenv");
dotenv.config();

function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require("ibm-watson-natural-language-understanding/v1");
    const { IamAuthenticator } = require("ibm-watson/auth");

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1 ({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: '{apikey}',
        }),
        serviceUrl: '{url}',
    });
    return naturalLanguageUnderstanding;

//New code
import React from "react"
import { Helmet } from "react-helmet"

const title = () => {
        return (
            <div>
                <Helmet>
                    <title>Sentiment Analyzer</title>
                </Helmet>
            </div>
        )
}

//New code ends

app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

  //Replace

app.get("/url/emotion", (req,res) => {
    getNLUInstance()
    return res.send({"happy":"90","sad":"10"});
});

app.get("/url/sentiment", (req,res) => {
    getNLUInstance()
    return res.send("url sentiment for "+req.query.url);
});

app.get("/text/emotion", (req,res) => {
    getNLUInstance()
    return res.send({"happy":"10","sad":"90"});
});

app.get("/text/sentiment", (req,res) => {
    getNLUInstance()
    return res.send("text sentiment for "+req.query.text);
});

//End of replace

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})


}
