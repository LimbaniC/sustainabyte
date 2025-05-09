import express from 'express';
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import { MongoClient, Db, Collection } from "mongodb";

const PORT = 3003;

const app = express(); 
app.use(express.json());
app.use(cors({
    origin: true,
}));

const uri = 'mongodb://root:example@food-db-service:27017';
const client = new MongoClient(uri);
let db: Db;
let users: Collection;

async function db_connect() {
    try {
      await client.connect();
      db = client.db('sustainability'); 
      users = db.collection('users');
      console.log('authentication-service connected to MongoDB');
      app.listen(PORT, () => console.log("The server is running!"));
    } catch (err) {
      console.error('Failed to connect to MongoDB database, server not running:', err);
    }
  }

db_connect();

app.post('/users/create-user', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    const username = req.body.username;
    //searches for user with input username
    const user = await users.findOne({"username" : username});
    if(user) {
        //client error
        return res.status(400).send("Username already in use");
    }
    else{
        try {
            //hashes password
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            //creates new user
            const newUser = await users.insertOne({"username": req.body.username, "password": hashedPass, "donated-data": [], "save-data": []});
            if(newUser){
                //success
                res.status(201).send("User successfully registered");
            }
        } catch {
            //server error
            res.status(500).send("Unable to add user");
        }
    }
});

app.post('/users/login', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    const username = req.body.username;
    const password = req.body.password;
    const user = await users.findOne({"username" : username});
    if(!user) {
        //client error
        return res.status(400).send("Cant find user associated with username");
    }
    try {
        //compares user input with hash value
        if(await bcrypt.compare(req.body.password, user.password)){
            //success
            res.status(201).send("Login successful")
        }
        else {
            //client error
            res.status(401).send("Password incorrect")
        }
    } catch {
        //server error
        res.status(500).send()
    }
});