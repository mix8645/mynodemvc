const mysql = require('mysql2');

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb'
});

dbconn.connect((err) =>{
    if(err) throw err;
});

const Person = {};

Person.getAll = (callback) => {
    let query = "select * from Persons";
    dbconn.query(query, callback);
};

Person.getByID = (productID, callback) => {
    let query = "select * from Persons where PersonID = ?";
    dbconn.query(query, productID, callback);
};

module.exports = Person;
