const express = require('express');
const app = express();

let currentID = 0;

class User {
    constructor(login, password) {
        this.id = currentID;
        currentID++;
        this.login = login;
        this.password = password;
        this.timestamp = new Date();
    }
}

const PORT = 3000;
let data = [];

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}); 

app.get('/', (req, res) => {
    console.log(data);
    res.send(data);
});

app.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send({
            ok: false,
            message: 'PLEASE SPECIFY USERNAME AND PASSWORD'
        });
        return;
    }

    const exists = data.findIndex(({ login }) => login == username) > -1;
    
    if (exists) {
        res.send({
            ok: false,
            message: 'USER EXISTS!'
        });
        return;
    }

    data.push(new User(username, password));
    res.send({
        ok: true
    });
});

app.delete('/', (req, res) => {
    const { id } = req.query;
    data = data.filter(u => u.id != id);
    res.send(data);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
