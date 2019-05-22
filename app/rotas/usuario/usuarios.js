
module.exports =(app)=>{
    app.get('/usuarios',(req, res)=>{
        app.app.controllers.usuario.listaUsuarios(app,req,res);
    });
}
