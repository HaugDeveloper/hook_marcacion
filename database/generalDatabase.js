const sql = require("mssql");
var { config, SP } = require("./config");

// promise style:
const pool2 = new sql.ConnectionPool(config);
const pool2Connect = pool2.connect();

sql.on("error", (err) => {
  console.log("SQL ON ERROR: " + err.message);
  // reject(err)
});

function exec(
  arrayParams,
  nameProcedure,
  authorization = null,
  paramsDecode = null,
  setTVP = null
) {
  return new Promise((resolve, reject) => {
    pool2Connect
      .then((pool) => {
        const request = new sql.Request(pool2);
        for (var i = 0; i < arrayParams.length; i++) {
          for (var key in arrayParams[i]) {
            request.input(key, arrayParams[i][key]);
          }
        }
        if (setTVP != null) setTVP(sql, request);

        request.execute(nameProcedure, (err, result) => {
          if (!err) {
            // console.log("Correcto")
            resolve(result);
          } else {
            reject(err);
          }
        });
        // .input('input_parameter', sql.Int, 10)
        // .output('output_parameter', sql.VarChar(50))
        // .execute('procedure_name', (err, result) => {
        //     // ... error checks
        //     console.dir(result)
        // })
      })
      .catch((err) => {
        // console.log(err)
        reject(err);
        // ... error handler
      });
  });
}

module.exports = {
  exec,
};
