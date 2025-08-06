/**
 * GET /greet
 * Query parameter: ?name=string
 * Response: { "message": string }
 */
app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'Name parameter is required' });
  }

  function greet(userName) {
    return `Hello, ${userName}! Welcome to Mintlify docs.`;
  }

  const message = greet(name);
  res.json({ message });
});