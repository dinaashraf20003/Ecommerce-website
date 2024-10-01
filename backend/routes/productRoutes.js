const express = require('express');
const router = express.Router();

// Example product route
router.get('/', (req, res) => {
    res.send('Products List');
});

module.exports = router;
