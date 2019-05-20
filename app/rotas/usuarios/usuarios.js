
module.exports =(app)=>{
    app.get('/usuarios',(req, res)=>{
        var conexao = app.config.database();
        conexao.query('select * from usuarios', (err, result)=>{
            res.render("./administrador/usuarios/usuarios", {usuarios : result});
        });
        
    });
}
