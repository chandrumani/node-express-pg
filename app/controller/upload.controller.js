exports.create = (req, res ) => {
    console.log("Upload begins");
    try {
        res.send(req.file)
    } catch(err) {
        res.send(500);
    }
}
