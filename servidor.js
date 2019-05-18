var app = require('./config/server');

const rota_index = require('./app/rotas/index')(app);
const rota_novoUsuario = require('./app/rotas/novoUsuario')(app);



app.listen(1000);