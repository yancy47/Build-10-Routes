const pants = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(pants)
    // res.render('pants/Index',)
    // Looks in the views folder for "pants/Index" and passes { pants } data to the view (kind of like a server props object)
    res.render('pants/Index', { pants })
}

module.exports = { index }