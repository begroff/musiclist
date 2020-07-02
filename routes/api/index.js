const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({ "text": "Musiclist API Text" });
});

module.exports = router;