const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to get all robot pets
app.get('/robots', (req, res) => {
    fs.readFile('data/robots.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read robots data.' });
        }
        res.json(JSON.parse(data));
    });
});

// Route to get a specific robot pet by ID
app.get('/robots/:id', (req, res) => {
    const robotId = req.params.id;
    fs.readFile('data/robots.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read robots data.' });
        }
        const robots = JSON.parse(data);
        const robot = robots.find(r => r.id === robotId);
        if (!robot) {
            return res.status(404).json({ error: 'Robot not found.' });
        }
        res.json(robot);
    });
});

// Route to delete a robot pet by ID
app.delete('/robots/:id', (req, res) => {
    const robotId = req.params.id;
    fs.readFile('data/robots.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read robots data.' });
        }
        let robots = JSON.parse(data);
        robots = robots.filter(r => r.id !== robotId);
        fs.writeFile('data/robots.json', JSON.stringify(robots, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete robot.' });
            }
            res.json({ message: 'Robot adopted successfully!' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
