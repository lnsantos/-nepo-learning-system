const sql = require('mysql');

// connSql : Recebe um método e passa para o retorno do exports, assim evitamos que para cada att se crie uma conexao com o database
var connSql = ()=>{
    console.log('Conexão estabelecida'); 
    return sql.createConnection({host : 'localhost', user : 'root', password : '', database : 'escola_database'});
}

module.exports = ()=>{ 
    return connSql;
};