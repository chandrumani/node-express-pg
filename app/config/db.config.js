module.exports = {
    HOST: "localhost",
    USER: "pgadm",
    PASSWORD: "1234",
    DB: "pgdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
