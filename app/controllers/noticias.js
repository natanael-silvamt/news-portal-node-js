module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    connection.connect();
    var noticiasDAO =  new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    connection.connect();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticia(function(error, result){
        res.render("noticias/noticia", {noticia : result});
    });
}