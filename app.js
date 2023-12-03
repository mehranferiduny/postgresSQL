const express = require('express');


const app = express();
const port = 3000;


app.use(express.json());



// خواندن اطلاعات از دیتابیس
app.get('/users', async (req, res) => {
  try {
   
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

// افزودن کاربر جدید
app.post('/users', async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  try {
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

// به‌روزرسانی اطلاعات یک کاربر
app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, userId]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

// حذف یک کاربر
app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
