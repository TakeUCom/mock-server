module.exports = {
    devServer: {
        before: function (app, server) {
            app.get('/path', function (req, res) {
                res.json({ response: 'sample' });
            });
        }
    }
};