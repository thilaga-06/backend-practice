const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

app.get('/get/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
}
);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);