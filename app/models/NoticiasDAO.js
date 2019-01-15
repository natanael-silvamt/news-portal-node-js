function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 1', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    var aux = "(" + "'" + noticia['titulo'] + "'" + ", " + "'" + noticia['noticia'] + "'" + 
    ", " + "'" + noticia['resumo'] + "'" + ", " + "'" + noticia['autor'] + "'" + 
    ", " + "'" + noticia['data_noticia'] + "'" + ")";
    this._connection.query('insert into noticias (titulo, noticia, resumo, autor, data_noticia) values ' + aux, callback);
}

module.exports = function () {
    return NoticiasDAO;    
}