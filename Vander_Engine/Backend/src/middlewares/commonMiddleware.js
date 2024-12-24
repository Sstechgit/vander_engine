const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

const applyMiddleware = (app) => {
  app.use(cors());

  // Use bodyParser for JSON requests
  app.use((req, res, next) => {
    if (req.is('application/json')) {
      bodyParser.json()(req, res, next);
    } else {
      next();
    }
  });
};

module.exports = applyMiddleware;
