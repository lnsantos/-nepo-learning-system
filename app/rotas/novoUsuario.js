module.exports =(app)=>{
    app.get('/novo_usuario',(req, res)=>{
        res.send("<h1>cadastrar novo usuario</h1>");
    });
}