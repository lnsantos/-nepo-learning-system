
module.exports = ()=>{
    // FUNÇÃO RETORNO FUNÇÃO ACESSA FUNÇÃO
    this.getUsuarios = (conexao, callback)=>{
        conexao.query('SELECT * FROM usuarios', callback);
    }
    return this;
}