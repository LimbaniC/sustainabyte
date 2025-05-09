import express from 'express';

const PORT = 3000;
const REGISTRY_URL = 'http://localhost:5000';

const app = express();  
app.use(express.json());


async function registerWithRetry(name: string, url: string, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`${REGISTRY_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url })
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      return;
    } catch (err) {
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

async function lookupService(name: string): Promise<string | null> {
  try {
    const res = await fetch(`${REGISTRY_URL}/lookup?name=${name}`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const { url } = await res.json();
    return url;
  } catch (err) {
    return null;
  }
}


async function handleProxy(serviceName: string, req: express.Request, res: express.Response) {
  const url = await lookupService(serviceName);
  if (!url) return res.status(502).send(`Could not resolve ${serviceName}`);
  try {
    const response = await fetch(url, {
      method: req.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const result = await response.json();
    res.status(response.status).json(result);
  } catch (err) {
    res.status(500).send(`Error communicating with ${serviceName}`);
  }
}
 

app.post('/a', (req, res) => handleProxy('logger-service', req, res));
app.post('/b', (req, res) => handleProxy('food-upload-service', req, res));
app.post('/c', (req, res) => handleProxy('food-upload-db', req, res));
app.post('/d', (req, res) => handleProxy('authentication-service', req, res));

app.listen(PORT, () => {
  registerWithRetry('api-gateway', `http://localhost:${PORT}`);
});


export default app; // Export for testing purposes

