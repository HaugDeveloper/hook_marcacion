var openpgp = require('openpgp');
const passKey="privado123*";

const publicKey="-----BEGIN PGP PUBLIC KEY BLOCK-----\r\n"+
"Version: BCPG v1.56\r\n"+
"\r\n"+
"mQMuBF0/MPkRCADg95fIaLGIyF6ACgmhurKsll/cRs5+Tks3VuVgm2UyzJra8LEZ\r\n"+
"omtJ/7FM99ER/jAORopZlCefbHgG/9H2z1BOHUg6x8Zb93HhfsTnO8uPMcPaDzYO\r\n"+
"wTyIzbp/pg9pIjPv8lvxFUinqo3tGKFEArfHEwVm6LK3ia00lHYDTJ1/Ws/VBhVD\r\n"+
"oybxILIO/4OFkd1HhhTfzrt91Pljfdrq0Dj4HzHtT9u60iFnTSftCuRxM3n1KqRe\r\n"+
"IJCeZizVtkFumv2wd7NrBUkujCuf9iXS9fj6JuhooEiJPiOjIn//tlO9V/LlNLDr\r\n"+
"ScrJfWsMgKsK9awZjuLaVWlHSQm75M46/gTRAQDm6+2S1gpBM59Eu6xy4teYa/r2\r\n"+
"Wmq1unut0Yd+i3rudQgAvi0GwvQZud9V+hgfgKCJUEFufCsjx0/JLwNmaENxSbbv\r\n"+
"yvzUNHrONMaYHSeJULcjImB4A+sGOd3ZabAUWZ+Ncl5cpj64mVjkkj3osGhCZUeZ\r\n"+
"JtGnsYF7FcKbijxojrOGZmbIWxXKVQSYg9C393Bj62vZtyBmW+qRVgmSBDMx5TW+\r\n"+
"LKPZIOCiOxKCVbVkc3jm7hXesnM1AIhJETLwx7AK73Tt5Ypoexf2DMTuZ3wj3Drh\r\n"+
"PZJIpGnvyiNco/fLgRErNHNY4Cancb5UyGI9hne9s7uJuI9lLuV7xeHscfhEISYm\r\n"+
"Dxykdw+nCvaH+ZPeIJyHa3e74IosRCI7gdIFO3XHHgf9En76sgZM29yYFApC3S5W\r\n"+
"rxQKQmm1Rgca7ckNg1qp+tSJhr/bOAMqMui8W2XO7uLzKZxzGmQaOm+19bs+UHaH\r\n"+
"pow/Lg/dNmHJjChq3N1yGJA82eviNB5dxY0uFH3nxgHT9Ixf7F2skI9l1ZZ2u43r\r\n"+
"7yhzpJeG3dYYnLFjLbnjeZG+FziInOcrY4pQ3wZKjy82CGgGpPZMAc3LSamH5oYC\r\n"+
"AuNL23GXa+ooDSCn5LmTsGM6GEIJe2ehLSqm2QgFTcv4l/MbOf5++Rv8wrOn37hn\r\n"+
"g7igfuxUH0rfsHlP8em/O9Y2OeE+gCKxhCw0aZNf9sdpS3Bj5Tk+hC1sK7Pu/6Z1\r\n"+
"7bQfU2FtYmkgPGRhbm55LmJ1aXphQHR5emNvcnAuY29tPoheBBMRCAAGBQJdPzD5\r\n"+
"AAoJEPiHQCdNXGA7qpoBAJbNROpeoec+2la1vu1fLtA+FFqWjbbNni5/9ynFFDd2\r\n"+
"AQC5Z3cWYzj0IE92PjBHDupEeYrCttkJzxSlrW6tA22a/bjMBF0/MPkQAgCUlP7A\r\n"+
"lfO4XuKGVCs4NvyBpd0KA0m0wjndOHRNSIz44x24vLfTO0GrueWjPMqRRLHO8zLJ\r\n"+
"S/BXO/BHo6ypjN87Af0VPV1hcq20MEW2iujh3hBwthNwBWhtKdPXOndJGZaB7lsh\r\n"+
"LJuWv9z6WyDNXj/SBEiV1gnPm0ELeg8Syhy5pCjMAf9WNG+gwlomflqokfF7DFNU\r\n"+
"B9Zgb5q9VoRVn9Dbs+D8Fr2bySxY7Z4JQ1GI575tjYqIgMY9QVr9UZ3nZ7Yj0dds\r\n"+
"iF4EGBEIAAYFAl0/MPkACgkQ+IdAJ01cYDub/wEArTsk2DOPqRvKarSQUisqpULA\r\n"+
"7MYWMHAWc7WQeGIqnlEA/jVglpj7UrCN0cO3L7gGtJ75mjzgrI1AUyKHStgmrZKi\r\n"+
"=jhdi\r\n"+
"-----END PGP PUBLIC KEY BLOCK-----";

const privateKey="-----BEGIN PGP PRIVATE KEY BLOCK-----\r\n"+
"Version: BCPG v1.56\r\n"+
"\r\n"+
"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\r\n"+
"h0rYJq2Sog==\r\n"+
"=19Ey\r\n"+
"-----END PGP PRIVATE KEY BLOCK-----";

/*export function encryptMessage(message){
    return new Promise((resolve, reject) => {
        openpgp.key.readArmored(publicKey).then(function(pgpMessage){
            var options = {
                message: openpgp.message.fromText(message),        
                publicKeys: pgpMessage.keys
            };
            openpgp.encrypt(options).then(function(messageEncrypted){
                resolve(messageEncrypted)
            }).catch(function(err){
                reject(err)
            });
        }).catch(function(error){
            reject(error)
        });
      })
};*/
function decryptMessage(messageEncrypt){
    return new Promise((resolve, reject) => {
        openpgp.key.readArmored(privateKey).then(function(pgpKey){
            const privKeyObj = pgpKey.keys[0];
            privKeyObj.decrypt(passKey);
            openpgp.message.readArmored(messageEncrypt).then(function(pgpMessage){
                const options = {
                    message: pgpMessage,
                    privateKeys: [privKeyObj],
              };
              openpgp.decrypt(options).then(plaintext => {
                resolve(plaintext.data)
              });
            }).catch(function(error){
                reject(error)
            });
        }).catch(function(error){
            reject(error)
        });
      })
};

module.exports={
    decryptMessage
}