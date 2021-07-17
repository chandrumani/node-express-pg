exports.create = (req, res ) => {
    try {
        res.send(req.file)
    } catch(err) {
        res.send(500);
    }
}
