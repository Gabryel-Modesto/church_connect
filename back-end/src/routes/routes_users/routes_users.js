import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem-vindo')
});

app.get('/users', (req, res) => {
    res.send('Buscando usuário')
})

app.post('/users/insertusers', (req, res) => {
    res.send('Criando usuários')
});

app.put('/users/usersupdate:id_user', (req, res) => {
    res.send('Editando usuário')
});


app.delete('/users/deleteusers:id_user', (req, res) => {
    res.send('Deletando usuário')
});