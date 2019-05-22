module.exports.novo_usuario = (app, req, res)=>{
    res.render("./administrador/usuario/novo_usuario",{err : {}, infor : {}});
}

module.exports.salvar_usuario = (app, req, res)=>{
    const data = req.body;
    var conexao = app.config.database;
    // Navegando no diretório
    var usuarioMD = new app.app.models.usuariosMD;
   

    req.assert('usuario','Insira seu nome').notEmpty(); 
    req.assert('pass','Insira sua senha').len(2,8);
    var erros = req.validationErrors();

    if(erros){
        res.render("./administrador/usuario/novo_usuario",{err : erros, infor : data});
    return;
    }

    usuarioMD.novoUsuario(conexao,data, (err, result)=>{
        res.redirect('/usuarios'); 
    });
}