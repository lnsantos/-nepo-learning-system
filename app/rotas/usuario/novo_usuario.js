module.exports =(aplicativo)=>{
    aplicativo.get('/novo_usuario', (req, res)=>{
        aplicativo.app.controllers.admin.novo_usuario(aplicativo, req, res);
    });
    aplicativo.post('/novo_usuario/salvar',(req, res)=>{
        aplicativo.app.controllers.admin.salvar_usuario(aplicativo, req, res);
    });
}

