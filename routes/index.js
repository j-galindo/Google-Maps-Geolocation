const express = require('express');
const router = express.Router();
//API KEY

//AIzaSyBG5jzMd7mTDiza20IeHZBhM1ZS_i_We-Y
/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;