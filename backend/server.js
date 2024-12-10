const express = require('express');
const cors = require('cors');//Middleware to enable Cross-Origin Resource Sharing
const bodyParser = require('body-parser');
const { Pool } = require('pg'); 
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a pool to connect to PostgreSQL
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'react_project', 
  password: 'admin@123', 
  port: 5432,
});


// Route for login
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  // Check if all fields are provided
  if (!name || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    // Find user by name
    const userQuery = await pool.query('SELECT * FROM users1 WHERE name = $1', [name]);
    const user = userQuery.rows[0];

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare provided password with stored hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'Server error' });
  }

  console.log('Received login request:', req.body);
});


//route for register
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const existingUser = await pool.query('SELECT * FROM users1 WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users1 (name, email, password) VALUES ($1, $2, $3)',
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Detailed error occurred:', err); 
    res.status(500).json({ error: 'Server error', details: err.message }); 
  }
});



// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
