// ENV
const PORT = process.env.PORT || 3001;
const ROOT = process.env.ROOT_URL || `http://localhost:${PORT}`;

module.exports = { PORT, ROOT };
