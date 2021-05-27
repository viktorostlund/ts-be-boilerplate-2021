module.exports = {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: 'user',
      password: 'pass',
      database: 'backend_boilerplate_db',
      port: process.env.PORT || 6789,
    },
    pool: {
      acquireTimeoutMillis: 300 * 1000,
      createTimeoutMillis: 300 * 1000,
    },
    migrations: {
      directory: './migrations',
      tableName: 'backend_boilerplate_migrations',
      schemaName: 'public',
    },
};
