var exports = module.exports = {};
const uuid = require('uuid/v4');
const db = require('lowdb')('db.json');
db.defaults({ persons: [] }).write();

exports.addPerson = (body) =>
{
    var personToAdd = body;
    personToAdd.id = uuid();
    personToAdd.added = Date.now();
    db.get('persons').push(personToAdd).write();
    return personToAdd;
}

exports.allPersons = () =>
{
    var arr = db.get('persons').value();
    return { count : arr.length, items : arr}
}