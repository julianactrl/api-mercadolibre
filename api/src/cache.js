const memocache = require('memory-cache')

const cache = duration => {
    return (req, res, next) => {
        let key = 'cache' + req.url
        let cachedBody = memocache.get(key)
        if(cachedBody){
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = body => {
                memocache.put(key, body, duration * 1000)
                res.sendResponse(body)
            }
            next();
        }
    }
}

module.exports = {
    cache
}