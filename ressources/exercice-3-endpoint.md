# Exercice 3 — Créer un endpoint

## Objectif
Isoler les endpoints dans un fichier controller.
Manipuler `req.params`, `req.body` et renvoyer des réponses JSON avec le bon code de statut.

## Énoncé
Crée un fichier `user.controller.js` qui contiendra les endpoints.

Crée un endpoint `POST /users` qui :
- reçoit un corps JSON `{ "name": "Alice", "age": 25 }`
- vérifie que `name` et `age` sont présents, sinon renvoie une erreur `400` avec `{ "error": "..." }`
- si valide, crée l'utilisateur (tu peux le stocker dans un tableau en mémoire) et renvoie `201` avec l'utilisateur créé, en ajoutant un `id` généré automatiquement.

## Contraintes
- Utilise `express.json()` pour parser le body.
- Pense à valider les types (`age` doit être un nombre).
