
module.exports =(app)=>{
    app.get('/usuarios',(req, res)=>{
        var codigoBuscaUsuario = 3;
        var conexao = app.config.database;
        // Navegando no diretório
        var usuariosModel = app.app.models.usuariosMD;
   
        usuariosModel.getUsuarios(conexao, (err, resultado)=>{
            res.render("./administrador/usuarios/usuarios", {usuarios : resultado, opc : 'usuarios'});
        });
        

        usuariosModel.getBuscaUsuario(conexao, (err, resultado,codigoBuscaUsuario )=>{
            res.render("./administrador/usuarios/usuarios", {usuario : resultado, opc : 'usuario', codigo : codigoBuscaUsuario});
        });

    });
}
