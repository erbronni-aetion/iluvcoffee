module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'iluvcoffee',
  password: 'iluvcoffee',
  database: 'iluvcoffee',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
