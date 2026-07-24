function errorManager () {
    return (err, req, res, next) => {
        console.error(err.message);

        res.status(res.statusCode || 500).json({
            "message": err.message
        });
    }
}

export default errorManager;