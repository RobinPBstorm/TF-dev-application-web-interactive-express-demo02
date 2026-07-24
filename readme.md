# Comment faire un projet en express

## Configuration du projet

```
npm init
```

On suit le prompt

## Importer express dans notre projet

```
npm install express@latest
```

NPM va rajouter express à la liste des dépendances \
puis va créer un dossier nodes_modules avec les librairies récupèrées;

## Créer le fichier central

On crée le fichier (ici app.js).

```js
import express from 'express';

// Confiurer notre application
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`L'application écoute sur le port ${port}`);
})
```

## Ajouter la commande pour démarrer le projet dans le package.json

L'option --watch de node permet de relancer automatiquement lors de l'enregistrement de nos modifications

```js
"scripts": {
    ...
    "start": "node --watch src/app.js"
  },
```

## créer une première route


```js
// dans app.js
app.get('/', (req, res) => {
    res.send('Hello world!');
});
```

## créer un router

Pour séparer la logique des routes du reste d'app.js

```js
import { Router } from "express"

const productRouter = Router();

productRouter.get("/", (req, res) => {
    ...
});

export default productRouter;
```

## Utiliser la route dans app.js

```js
import productRouter from './routers/product.router.js';

app.use('/product',productRouter);
```

## Créons un middleware

Un middlewar est une fonction qui s'activer entre la demande (la requête) et la création de la ressource (dans le router/controller).

```js
// dans app.js
// pour le créer
function timer() {
    return (req, res, next) => {
        const start = new Date();

        // !important
        next();

        const end = new Date();
        const time = end.getTime() - start.getTime();
        console.log(`Le process a pris ${time} ms.`)
    }
}

// pour l'utiliser
app.use(timer());
```

## Éttofons nos route

```js
const productRouter = Router();

// route.verbeHTTP(path, callback);
// post (create) get (read) put patch (update) delete (delete)
productRouter.get("/", (req, res) => {
    ...
    // méthode universelle
    res.send("mon contenu");

    // renvoie l'object sous format json
    res.json(monObjet)

    // écrit un contenu en string (doit être arrêté avec le end)
    res.write("mon contenu")

    // définir le code http (par: 200 ok, 404 not found, ...)
    res.status(200);

    // utilise un template définit dans le projet
    res.render(...);

    // permet d'envoyer le contenu qui a été construis
    res.end();
});
```

## Ajouter un middleware de gestion d'erreur

La création:

```js
function errorManager () {
    // important ici: 4 paramètres
    return (err, req, res, next) => {
        console.error(err.message);

        res.status(res.statusCode || 500).json({
            "message": err.message
        });
    }
}

export default errorManager;
```

Utiliser:

```js
// dans l'app.js
import errorManager from './middlewares/errorManager.js';

...

// toutes nos routes
app.use(errorManager());
```

## Pour utiliser un fichier .env

Créer un fichier .env qui sera ignoré par le gitignore
```
PORT=3000
...
```

Indique que l'on utilise .env
```json
"scripts": {
    "start": "node --watch --env-file-if-exists=.env src/app.js"
  },
```

On peut appeler les différentes constantes de ce fichier:
```js
const port = process.env.PORT || 3000; // 3000 est mi par défaut
```

## Isoler les contollers

Crée un fichier pour stocker l'objet controller/ fonctions
```js
const productController = {
    getAll (req, res) {
        ...
    },
    getOneById (req, res) {
        ...
    }
};

export default productController;
```

On inidque au routers qu'il va utiliser le controller
```js
// product.router.js
import productController from "../controllers/product.controller.js";

...

productRouter.route("/")
    .get(productController.getAllProduct);

productRouter.route("/:id")
    .get(productController.getOneById);
```