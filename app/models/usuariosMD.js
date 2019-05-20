
module.exports = ()=>{
    // FUNÇÃO RETORNO FUNÇÃO ACESSA FUNÇÃO
    this.getUsuarios = (conexao, callback)=>{
        conexao.query('SELECT * FROM usuarios', callback);
    }

    this.getBuscaUsuario = (conexao, callback, codigo)=>{
        conexao.query('SELECT * FROM usuarios WHERE codigo = '+codigo, callback);
    }

    this.novoUsuario = (conexao, data , callback)=>{
        var username = data.username;
        var password = data.password;

        conexao.query('INSERT INTO usuarios(usuario,pass) values ('+
        username+'),('+password+');', callback);
        console.log(username +' Inserido com sucesso!');
    }
    return this;
}