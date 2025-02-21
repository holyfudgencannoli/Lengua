const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Serve the HTML page
app.use(express.static('public'));

// Endpoint to execute the Python script
app.get('/run-python', (req, res) => {
  exec('python3 script.py', (err, stdout, stderr) => {
    if (err) {
      console.error('Error executing script:', err);
      return res.status(500).send('Error executing Python script');
    }
    if (stderr) {
      console.error('Python stderr:', stderr);
      return res.status(500).send('Error executing Python script');
    }
    res.send(`Python Output: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
