// app.js
const express = require('express');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files (e.g., HTML, JS)
app.use(express.static('public'));

// Endpoint to fetch data from an Excel file
app.get('/get_excel_data', (req, res) => {
    const filePath = path.join(__dirname, 'data.xlsx');  // Adjust path as needed

    try {
        // Read the Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];  // Get the first sheet
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON (array of rows)
        const data = xlsx.utils.sheet_to_json(sheet);

        // Send the data as a JSON response
        res.json(data);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        res.status(500).send('Error reading the Excel file');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
