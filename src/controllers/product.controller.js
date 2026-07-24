const products = [
    { 
        "id": 1,
        "name": "Brosse à dent"
    },
    { 
        "id": 2,
        "name": "Tasse à café"
    },
]

const productController = {
    getAllProduct (req, res) {
        for (const product of products) {
            res.write(`${product.id} : ${product.name}\n`);
        }
        res.end();
    },

    getProductById (req, res) {
        const id = req.params.productId;
        const product = products.find((product) => product.id == id);
        
        if (product) {
            res.status(200);
            res.json(product);
        }
        else {
            //res.status(404).send("Le produit n'a pas ététrouvé");
            res.sendStatus(404);
        }
    },

    createProduct (req, res) {
        // nécessite le middleware express.json()
        const body = req.body;
        if (body && body.id && body.name) {
            products.push(body);
        }
        res.send(body);
    }


}

export default productController;