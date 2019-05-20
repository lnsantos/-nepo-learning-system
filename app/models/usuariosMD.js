
module.exports = ()=>{
    // FUNÇÃO RETORNO FUNÇÃO ACESSA FUNÇÃO
    this.getUsuarios = (conexao, callback)=>{
        conexao.query('SELECT * FROM usuarios', callback);
    }

    this.getBuscaUsuario = (conexao, callback, codigo)=>{
        conexao.query('SELECT * FROM usuarios WHERE codigo = '+codigo, callback);
    }
    return this;
}