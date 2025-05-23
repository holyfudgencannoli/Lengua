const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/api/lookup', async (req, res) => {
  const upc = req.query.upc;
  if (!upc) {
    return res.status(400).json({ error: 'UPC is required' });
  }

  try {
    const apiUrl = `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`UPC API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
