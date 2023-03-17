const shoes = require('../models/shoes')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(shoes)
    // res.render('shoes/Index',)
    // Looks in the views folder for "shoes/Index" and passes { shoes } data to the view (kind of like a server props object)
    res.render('shoes/Index', { shoes })
}

module.exports = { index }