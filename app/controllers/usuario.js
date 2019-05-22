module.exports.listaUsuarios = (app, req, res)=>{
        var codigoBuscaUsuario = 3;
        var conexao = app.config.database;
        // Navegando no diretório
        var usuariosModel = new app.app.models.usuariosMD;
   
        usuariosModel.getUsuarios( conexao,(err, resultado)=>{
            res.render("./administrador/usuario/usuarios", {usuarios : resultado, opc : 'usuarios'});
        });
        
        usuariosModel.getBuscaUsuario(conexao,(err, resultado,codigoBuscaUsuario )=>{
            res.render("./administrador/usuario/usuarios", {usuario : resultado, opc : 'usuario', codigo : codigoBuscaUsuario});
        });

}