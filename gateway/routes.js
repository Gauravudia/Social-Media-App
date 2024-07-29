const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const router = express.Router();
require('dotenv').config();

const userServiceProxy = createProxyMiddleware({
    target: `${process.env.USER_SERVICE_URL}/users`,
    changeOrigin: true,
});

const discussionServiceProxy = createProxyMiddleware({
    target: `${process.env.DISCUSSION_SERVICE_URL}/discussions`,
    changeOrigin: true,
});

const interactionServiceProxy = createProxyMiddleware({
    target: `${process.env.INTERACTION_SERVICE_URL}/interactions`,
    changeOrigin: true,
});

router.use('/users', userServiceProxy);
router.use('/discussions', discussionServiceProxy);
router.use('/interactions', interactionServiceProxy);
router.get('/test', (req, res) => {
    res.send('Test route working!');
});

module.exports = router;
