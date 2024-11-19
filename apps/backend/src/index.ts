import express from 'express';
import { URL } from '@repo/common/config';

const app = express();

console.log(URL);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});