module.exports =(app)=>{
    app.get('/novo_usuario', (req, res)=>{
        res.render("./administrador/usuario/novo_usuario");
    });
    app.post('/novo_usuario/salvar',(req, res)=>{
        var conexao = app.config.database;
        // Navegando no diretório
        var usuarioMD = new app.app.models.usuariosMD;
        var data = req.body;
        var usuario = req.assert('usuario','Insira seu nome').notEmpty(); 
        var pass = req.assert('pass','Insira sua senha').len(2,8);

        var erros = req.validationErrors();

         
        if(erros){
            res.render("./administrador/usuario/novo_usuario",{err : erros});
        return;}
        

        usuarioMD.novoUsuario(conexao,data, (err, result)=>{
            res.redirect('/usuarios'); 
        });
    });
}

