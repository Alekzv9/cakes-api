const dbConfig = require('./db')[process.env.ENVIRONMENT];

const getDbConfig = () => {
  if (!process.env.ENVIRONMENT)
    throw new Error(
      'ENVIRONMENT is undefined. process.env.ENVIRONMENT: ' +
        process.env.ENVIRONMENT
    );

  if (!dbConfig) throw new Error('dbConfig is undefined. dbconfig' + dbConfig);

  return dbConfig;
};

module.exports.db_config = getDbConfig();
