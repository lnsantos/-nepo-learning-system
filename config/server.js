var express = require('express');
const consign = require('consign');
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

// realizar todos os require da aplicationWeb
// passando por parâmetro no app
consign().include('app/rotas').into(app);

module.exports = app;
   
   

