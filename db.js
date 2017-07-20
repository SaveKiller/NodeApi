var exports = module.exports = {};
const uuid = require('uuid/v4');
const db = require('lowdb')('db.json');
db.defaults({ persons: [] }).write();

exports.addPerson = (body) =>
{
    var personToAdd = body;
    personToAdd.id = uuid();
    personToAdd.added = Date.now();
    var persons = db.get('persons');
    persons.push(personToAdd).write();
    return {result: "added : "+JSON.stringify(personToAdd)};
}