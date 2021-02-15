import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('works!');
});

app.listen(PORT, () => {
console.log(`server is listening on port: ${PORT}`);
});