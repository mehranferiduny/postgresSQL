const {pool}=require('../utils/db_postgras')

class Model_User{
  static getUsers=async()=>{
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static getUser=async(email)=>{
    const result = await pool.query('SELECT * FROM users WHERE email = $1 ',[email]);
    return result.rows;
  }

  static insertUser=async (name,email)=>{
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return result.rows[0];
  };

  static updateUser=async (name,email,userId)=>{
    const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, userId]);
    return result.rows[0]
  }

  static deleteUser=async (id)=>{
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return result.rows[0];
  }
}

module.exports=Model_User;