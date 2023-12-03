const { Pool } = require('pg');

require('dotenv').config();

// تنظیمات اتصال به دیتابیس PostgreSQL
exports.pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  port: process.env.PORT_DB,
});