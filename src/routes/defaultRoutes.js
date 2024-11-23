const express = require('express');
const { getAccountData } = require('../services/getAccountService');
const router = express.Router();
const cheerio = require('cheerio');

router.get('/', getAccountData);

const redirects = [
    // { path: '/view', url: 'https://purehealthtt.onlinewebshop.net/' },
];

redirects.forEach(({ path, url }) => {
    router.get(path, (req, res) => res.redirect(url));
});

module.exports = router;