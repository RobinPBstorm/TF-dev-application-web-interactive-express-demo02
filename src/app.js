import express from 'express';

//import des middlewares
import timer from './middlewares/timer.js';
import errorManager from './middlewares/errorManager.js';
//import des routers
import productRouter from './routers/product.router.js';
import usersRouter from './routers/user.router.js';

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
app.use('/products',productRouter);
app.use('/users', usersRouter);
// route par défaut
app.use('*splat', (req, res) => {
    throw new Error("Bad url")
});

app.use(errorManager());

app.listen(port, ()=> {
    console.log(`L'application écoute sur le port ${port}`);
})