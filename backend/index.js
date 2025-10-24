const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import and use routes
const helloRoutes = require('./routes/hello');
app.use('/api/hello', helloRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
