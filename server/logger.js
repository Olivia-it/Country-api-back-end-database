const logger = (req, res, next) => {
    /// method http commands
    console.log(req.method, req.originalUrl) //gt countries
    next()
}

module.exports= logger;