const bodyParser = require('body-parser');
const cors = require('cors');
const team = require('./controllers/team');

exports = module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/api/team', team.get);


};