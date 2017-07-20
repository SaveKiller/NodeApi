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
    persons.push({aa:1,bb:2}).write();
    persons.push(personToAdd).write();
    return {result: "added : "+JSON.stringify(personToAdd)};
}