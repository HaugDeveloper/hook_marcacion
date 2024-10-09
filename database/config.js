const config = {
  user: "ControlMedico",
  password: "bD9KKwntki4iN2y",
  server: "10.100.1.38",
  database: "RECURSOS_HUMANOS",
  options: {
    trustedConnection: true,
  },
  pool: { max: 200, min: 0, idleTimeoutMillis: 10000 },
};
const SP = {
  WEBHOOK: {
    SP_RECOPILAR_WEBHOOK: "INSERT_HOOK",
  },
};

module.exports = {
  SP,
  config,
};
