function Usuario(){

}

Usuario.prototype.getUsuarios = (conexao, callback)=>{
    conexao.query('SELECT * FROM usuarios', callback);
}

Usuario.prototype.getBuscaUsuario = (conexao, callback, codigo)=>{
    conexao.query('SELECT * FROM usuarios WHERE codigo = '+codigo, callback);
}

Usuario.prototype.novoUsuario = (conexao, data , callback)=>{
    var username = data.username;
    var password = data.password;
    conexao.query('INSERT INTO usuarios SET ?',data, callback); 
}
module.exports = ()=>{
    return Usuario;
}
