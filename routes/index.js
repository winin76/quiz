var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
//Captura los GET que se han implementado en las vistas, y que se activan con la interacion del usuario v3

/* GET home page. */

//modificamos title =Express por title=Quiz-Quest v2
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz-Quest' });
});

// GET /quizes/question, captura el get venga con esa ruta y le pasa la info al quizController, para que realice lo que solicita el GET, v3
router.get('/quizes/question', quizController.question);

// GET /quizes/answer, igual que el get question v3
router.get('/quizes/answer',   quizController.answer);



module.exports = router;
