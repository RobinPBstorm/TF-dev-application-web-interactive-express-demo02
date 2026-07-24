import { Router } from "express";

const users = [
    { 
        "id": 1,
        "name": "Tom Sawyer"
    },
    { 
        "id": 2,
        "name": "Mowgli"
    },
]

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    // soit avec res.write
    for (const user of users) {
        res.write(`${user.id}: ${user.name}\n`);
    }
    res.end();

    // soit avec send ou json
    // res.json(users);
});
usersRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        // res.writeHead(401, "id invalid");
        // res.end();
        res.status(401);
        throw new Error ("id invalid");
    }
    const user = users.find((u) => u.id == id);
    if (!user) {
        // res.writeHead(404, "user not found");
        // res.end();
        res.status(404);
        throw new Error ("user not found");
    }
    else {
        res.write(`user found: ${user.id} - ${user.name} `);
        res.end();
    }
});

export default usersRouter;