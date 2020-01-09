const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

//Inicializar
const kenny = express();

//Settings
kenny.set('port', process.env.PORT || 3000);
kenny.set('views', path.join(__dirname, 'views'));
keny.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(kenny.get('views'),'layouts'),
  partialsDir: path.join(kenny.get('views'), 'layouts'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));

kenny.use(morgan('dev'));
kenny.use(express.json());

kenny.use('/', require('./routes/index.js'));
kenny.use('/auth', require('./routes/auth.js'));

kenny.use(express.static(path.join(__dirname, 'public')));

kenny.listen(kenny.get('port'), () => {
  console.log(`Server on port ${kenny.get('port')}`);
})
