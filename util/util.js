const jwt = require("jsonwebtoken");

function getIPPublic(req){
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
    return ip;
}
function validateToken(req){
    return new Promise((resolve, reject) => {
        jwt.verify(
            req.headers["authorization"], 
            process.env.SECRET_KEY,
            function( err, decoded ) {
                if(!err){
                    resolve(decoded)
                }else{
                    if(err.message=='invalid token'){
                        reject({status:false, message:"Token invalido", code: 300})
                    }else{
                        reject({status:false, message:"Token expirado", code: 400})
                    }
                }
        });
    })
}

module.exports={
    getIPPublic,
    validateToken
}