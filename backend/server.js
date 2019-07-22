import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Login from './models/Login';

// Sets up the server
const app = express();
const router = express.Router();

// Brings in cross orgin support for json
app.use(cors());
app.use(bodyParser.json());

// Connects to the MongoDB
mongoose.connect('mongodb://localhost:27017/weather-api');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Sets up test route
router.route('/').get((req, res) => {
    res.send('I love you 3000!');
});

// Sets up route to get one login
router.route('/login/:username').get((req, res) => {
    // Checks if username exists
    Login.find({'username': req.params.username}, (err, data) => {
        if (err)
            console.log(err);
        // If username doesn't exist send error
        else if (data.length === 0)
            res.status(400).send('No user found');
        // If username exists send login information in json format
        else if (data.length === 1) {
            // Gets only necessary login information out of data array 
            let login = new Login(data[0]);
            res.json(login);
        }
        else
            res.status(400).send('Multiple entries found');
    });
});

// Route added to create new user, but will not be available from Angular front end as of yet and might never be
// Please use Postman or ARC to add new users
router.route('/login/add').post((req, res) => {
    // Checks if username exists
    Login.find({'username': req.body.username}, (err, username) => {
        if (err)
            console.log(err);
        // If username doesn't exist, create new login
        else if (username.length === 0) {
            let login = new Login(req.body);
            login.save()
                .then(login => {
                    res.status(200).json({'login': 'New user added'});
                })
                .catch(err => {
                    res.status(400).send('Failed to add new user');
                });
        }
        // Sends error if username exits
        else
            res.status(400).send('Duplicate username');
    });
});

// Adds routes to base url
app.use('/', router);

// Sets server to port 3000 and logs message
app.listen(3000, () => {
    console.log('Express server is running on port 3000.');
});
