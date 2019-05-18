module.exports =(app)=>{
    
    app.get('/novo_usuario',(req, res)=>{
        var conexao = app.config.database();
        res.send("<h1>cadastrar novo usuario</h1>");
    });
}