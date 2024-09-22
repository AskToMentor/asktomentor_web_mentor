const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', // This is the endpoint you want to proxy
        createProxyMiddleware({
            target: 'http://3.110.50.95:5000', // The target server
            changeOrigin: true,
        })
    );
};
