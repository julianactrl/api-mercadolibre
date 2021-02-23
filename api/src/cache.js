const mcache = require('memory-cache')

const cache = duration => {
    return (req, res, next) => {
        let key = 'cache' + req.url
        let cachedBody = mcache.get(key)
        if(cachedBody){
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            console.log("no estoy en el cache")
            res.send = body => {
                mcache.put(key, body, duration * 1000)
                res.sendResponse(body)
            }
            next();
        }
    }
}

module.exports = {
    cache
}