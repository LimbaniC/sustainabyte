const express = require('express');
const app = express();
app.use(express.json());


const fs = require('fs');
const path = require('path');
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}

const services = {}; // { serviceName: { url, lastSeen, ip, } }

app.post('/register', (req, res) => {
    const { name, url } = req.body;
    if (!name || !url) return res.status(400).send('Missing name or url');
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const port = req.socket.remotePort;
    services[name] = { url, lastSeen: Date.now(),ip: ip+":"+ port };
    res.status(200).send(`Registered ${name}`);
});

app.get('/services',(req,res) =>{ 
    if(Object.keys(services).length === 0)
        res.status(200).send(`No Services Registered`)
    else
        res.json(services)
})

app.get('/health', (req, res) => res.send('OK'));

app.post('/log', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const port = req.socket.remotePort;
    const { level = 'info', message = '', service = 'unknown' } = req.body;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${service}] [${level.toUpperCase()}] [IP: ${ip+":"+ port}] ${message}\n`;

    if (services[service]) {
        services[service].lastSeen = Date.now();
    }

    process.stdout.write(logEntry);
    console.log(logEntry);

    const logPath = path.join(LOG_DIR, `${service}.log`);
    fs.appendFile(logPath, logEntry, err => {
        if (err) {
            console.error('Failed to write log:', err);
            return res.status(500).send('Error writing log');
        }
        res.status(200).send('Logged');
    });
});

setInterval(() => {
    const now = Date.now();
    for (const [name, info] of Object.entries(services)) {
        if (now - info.lastSeen > 120000) delete services[name]; // stale for 2 min
    }
}, 60000);

app.listen(3001, () => console.log('Logger listening on port 3001'));
