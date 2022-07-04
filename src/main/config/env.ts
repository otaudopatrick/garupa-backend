export default {
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H',
  postgresUrl: process.env.POSTGRES_URL || 'postgres://postgres:postgrespw@localhost:49153',
  dbName: "crud",
  dbUser: "postgres",
  dbPassword: "postgrespw",
  dbUri: "localhost",
  dbPort: "49154",
}
