import express from 'express';

const app = express();

// Default route to test if server is running
app.get('/', (req, res) => res.send('I love you 3000!'));

// Sets server to port 3000 and logs message
app.listen(3000, () => console.log('Express server is running on port 3000.'));