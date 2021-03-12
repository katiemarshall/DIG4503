import Express from 'express';
const App = Express();
const port = 3010;

App.get('/people/:name/:id' , (req, res) => {
    res.json({name: req.params.name} + {userid:req.params.id});

});

App.listen(port, () => {

});