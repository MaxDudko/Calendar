const express = require('express');

const router = express.Router();

// GET http://localhost:3000/api/some
router.get('/some',(req, res) => {
	// ....
});

// POST http://localhost:3000/api/some
router.post('/some', (req, res) => {
	// ...
});

module.exports = router;