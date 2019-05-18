const sql = require('mysql');

var conexao = sql.createConnection({host : 'localhost', user : 'root', password : '', database : 'escola_database'});

module.exports = ()=>{ console.log('Conexão estabelecida'); return conexao;};