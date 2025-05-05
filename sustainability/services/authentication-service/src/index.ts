import express from 'express';
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cors from "cors";

const PORT = 3003;

const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
}));

const users: {username: string, password: string}[] = []

app.get('/users', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.json(users)
});

app.post('/users/create-user', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    const user = users.find(user => user.username == req.body.username);
    if(user) {
        return res.status(400).send("Username already in use");
    }
    else{
        try {
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            const newUser = {username: req.body.username, password: hashedPass};
            users.push(newUser);
            res.status(201).send("User successfully registered");
        } catch {
            res.status(500).send("Unable to add user");
        }
    }
});

app.post('/users/login', async (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    const user = users.find(user => user.username == req.body.username);
    if(!user) {
        return res.status(400).send("Cant find user associated with username");
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send("Login successful")
        }
        else {
            res.send("Password incorrect")
        }
    } catch {
        res.status(500).send()
    }
});

app.listen(PORT, () => console.log("The server is running!"));