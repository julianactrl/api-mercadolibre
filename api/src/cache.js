const memocache = require('memory-cache')

const cache = duration => {
    return (req, res, next) => {
        let key = 'cache' + req.originalUrl || req.url
        let cachedBody = memocache.get(key)
        if(cachedBody){
            res.send(cachedBody)
            console.log("No estoy en la cache")
            return
        } else {
            res.sendResponse = res.send
            res.send = body => {
                memocache.put(key, body, duration * 1000)
                res.sendResponse(body)
                console.log("Ahora estoy en la cache")
            }
            next();
        }
    }
}

module.exports = {
    cache
}