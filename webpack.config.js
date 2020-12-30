module.exports = {
    devServer: {
        port: 9000,
        before: function (app, server) {

            const apis = require('./mock-data/api.json');
            
            for(const api of apis) {
                const path = api.path;
                const method = api.method;
                const data = require('./mock-data/json/' + api.file);
                console.log('add mocked api. path: ' + path + '. method: ');
                switch(method) {
                    case 'GET' :
                        app.get(path, function (req, res) {
                            res.json(data);
                        });
                }
            }

        }
    }
};