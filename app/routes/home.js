module.exports = function (app) {
    app.get('/', function (req, res){
        application.app.controllers.home.index(application, req, res);
    });
};
