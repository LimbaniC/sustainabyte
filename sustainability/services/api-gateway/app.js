import express from 'express';

const PORT = 3000;

const app = express();  
app.use(express.json());

async function handleProxyRequest(req, res) {
  const { method, url, body } = req;
  // const targetUrl = `http://localhost:3000${url}`; // Adjust the target URL as needed
  const targetUrl = `http://food-upload-service:3004${url}`;


  try {
    const response = await fetch(targetUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}   

app.post('/a', (req, res) => handleProxyRequest(req, res)); // Proxy POST requests to /a
app.post('/b', (req, res) => handleProxyRequest(req, res)); // Proxy POST requests to /b
app.post('/c', (req, res) => handleProxyRequest(req, res)); // Proxy POST requests to /c
app.post('/d', (req, res) => handleProxyRequest(req, res)); // Proxy POST requests to /d


app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});

export default app; // Export for testing purposes

