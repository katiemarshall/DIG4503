import Express from 'express';

const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/: person', (req, res) => {
    let names = req.params.names;
    if (names.includes(names)){
        res.json({ name: "name"});
    } else{ 
        res.json({ Name: "Not available"});
    }
});

App.get('/search/:name', (req, res) => {
   const result = names.filter(str => str.includes(req.params.names));

   if (result != 0) {
       res.json({ search: [names]});
   } else {
       res.json({ search: "Not available" });
   }
})

App.listen(port, () => {

});
