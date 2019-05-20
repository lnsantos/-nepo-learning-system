
module.exports =(app)=>{
    app.get('/usuarios',(req, res)=>{
        var conexao = app.config.database;
        // Navegando no diretório
        var usuariosModel = app.app.models.usuariosMD;

        usuariosModel.getUsuarios(conexao, (err, resultado)=>{
            res.render("./administrador/usuarios/usuarios", {usuarios : resultado});
        });
    });
}
