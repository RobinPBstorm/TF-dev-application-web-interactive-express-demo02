import express from 'express';

import timer from './middlewares/timer.js';
import productRouter from './routers/product.router.js';

// Confiurer notre application
const app = express();
const port = 3000;

// Permet de récupérer le contenu en json du body d'une requête
app.use(express.json());
app.use(timer());

// Définir les routes
app.get('/', (req, res) => {
    res.write('<!DOCTYPE html>\
        <html lang="en">\
        <head>\
            <meta charset="UTF-8">\
            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
            <title>Document</title>\
        </head>\
        <body>\
            <h1>Hello World!</h1>\
        </body>\
        </html>');
    res.end();
});
app.use('/product',productRouter);

app.listen(port, ()=> {
    console.log(`L'application écoute sur le port ${port}`);
})