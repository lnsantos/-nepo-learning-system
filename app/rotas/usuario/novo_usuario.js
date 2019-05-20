module.exports =(app)=>{
    app.get('/novo_usuario', (req, res)=>{
        res.render("./administrador/usuario/novo_usuario");
    });
    app.post('/novo_usuario/salvar',(req, res)=>{
        var conexao = app.config.database;
        // Navegando no diretório
        var usuarioMD = app.app.models.usuariosMD;
        var data = req.body;

        usuarioMD.novoUsuario(conexao,data, (err, result)=>{
            (usuarioMD.novoUsuario(conexao, (err, result)=>{
                res.render("./administrador/usuario/usuarios", {usuarios : result});
            }));  
        });
    });
}

