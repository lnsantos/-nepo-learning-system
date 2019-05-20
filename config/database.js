const sql = require('mysql');
var qtdConnections = 0;
var pool;
// connSql : Recebe um método e passa para o retorno do exports, assim evitamos que para cada att se crie uma conexao com o database
// var connSql = ()=>{
   
module.exports = ()=>{ 
     // Verificando quantas conexões usuários fez
     // Evitando que fique criando várias
        if (pool) return pool;
        qtdConnections = qtdConnections++;
        console.log('Conexão número : ' + qtdConnections);
        pool = sql.createConnection({host : 'localhost', user : 'root', password : '', database : 'escola_database'});
        return pool;  
};
// };