module.exports =(app)=>{
    app.get('/novo_usuario', (req, res)=>{
        res.render("./administrador/usuario/novo_usuario");
    });
    app.post('/novo_usuario/salvar',(req, res)=>{
        var data = req.body;
        res.send(data);
    });
}

