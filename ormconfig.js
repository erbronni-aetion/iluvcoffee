module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ilovecoffee',
  password: 'ilovecoffee',
  databse: 'ilovecoffee',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
