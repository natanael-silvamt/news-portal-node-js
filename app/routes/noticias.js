module.exports = function (application) {
    application.get('/noticias', function (req, res){
        var connection = application.config.dbConnection();
        connection.connect();
        var noticiasDAO =  new application.app.models.NoticiasDAO(connection);

        noticiasDAO.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    }); 
};

