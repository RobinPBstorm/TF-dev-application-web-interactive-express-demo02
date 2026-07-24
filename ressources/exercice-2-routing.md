# Exercice 3 — Le routing

## Objectif
Organiser les routes avec `express.Router()` au lieu de tout mettre dans `app.js`.

## Énoncé
Crée un routeur dédié aux utilisateurs (`usersRouter`) dans un fichier séparé (`routes/users.router.js`), avec les endpoints suivants :
- `GET /users` → liste tous les utilisateurs
- `GET /users/:id` → renvoie un utilisateur par son id (404 si non trouvé)


## Contraintes
- Utilise `express.Router()`.
- Le fichier `app.js` ne doit contenir aucune logique métier liée aux utilisateurs, seulement le montage du routeur.

