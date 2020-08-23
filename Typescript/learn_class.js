var Person = /** @class */ (function () {
    function Person(_name, _age, _skill) {
        this._name = _name;
        this._age = _age;
        this._skill = _skill;
    }
    Person.prototype.display = function () {
        console.log("Hi my name is " + this._name + " and i am " + this._age + " year old. I am learning " + this._skill);
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (_age) {
            this._age = _age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "skill", {
        get: function () {
            return this._skill;
        },
        set: function (_skill) {
            this._skill = _skill;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var linebreak = '\n';
var person = new Person('Nikhil Mishra', 21, 'Typescript');
console.log("Data of person is  " + linebreak);
person.display();
console.log(linebreak);
var personName = person.name;
console.log(personName);
person.name = 'Nikhil';
console.log("Edited data is " + linebreak);
person.display();
// Note :  target es5 for this typescript transpile it into javascript ;
// command ::::   tsc -t  es5 learn_class.ts
// command ::::    node learn_class.js
