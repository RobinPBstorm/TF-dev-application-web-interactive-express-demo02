function timer() {
    return (req, res, next) => {
        const start = new Date();

        next();

        const end = new Date();
        const time = end.getTime() - start.getTime();
        console.log(`Le process a pris ${time} ms.`)
    }
}

export default timer;