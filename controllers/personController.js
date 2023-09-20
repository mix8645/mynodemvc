const Person = require('../models/personModel');

exports.getAllPersons = (req, res) => {
    Person.getAll((err, result) => {
        if(err) throw err;
        res.json(result);
    })
};

exports.getPersonById = (req, res) => {
    let PersonID = req.params.id;
    Person.getByID(PersonID, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
};