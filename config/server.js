var express = require('express');
const consign = require('consign');
var bp = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

// Seta onde vai busca os arquivos
app.use(express.static('./public'));

// Muda a Engine do NodeJS, extenssão
app.set('view engine', 'ejs');

// Local onde ele vai busca as views
app.set('views', './app/views');

// Verifica se não encontrou a página
/*app.use((req, res, next)=>{
    req.statusCode(404).render("Pagina não encontrada")
});
*/

// Implementando o Body-parse
// Configurando a nossa URL! permitindo que o JSON trate a URL ?
// Ele recebe a URL e transforma em um JSON, Minhas observações me leveram a isso
app.use(bp.urlencoded({extended: true}))
app.use(expressValidator());

// realizar todos os require da aplicationWeb
// passando por parâmetro no app
consign()
    .include('app/rotas')
    // Incluindo o databaseConnection 
    .then('config/database.js')
    // Inclindo os model
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
   
   

