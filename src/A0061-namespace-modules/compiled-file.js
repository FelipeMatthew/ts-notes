// Criar um escopo
var MyNamespace;
(function (MyNamespace) {
    var name = 'felps';
    var PersonInNamespace = /** @class */ (function () {
        function PersonInNamespace(name) {
            this.name = name;
        }
        return PersonInNamespace;
    }());
    MyNamespace.PersonInNamespace = PersonInNamespace;
    var person = new PersonInNamespace('John Doe');
    console.log(person);
    var AnotherNamespace;
    (function (AnotherNamespace) {
        AnotherNamespace.anotherNamespace = 'another name space';
    })(AnotherNamespace = MyNamespace.AnotherNamespace || (MyNamespace.AnotherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var personOutsideOfNamespace = new MyNamespace.PersonInNamespace('felps');
console.log(personOutsideOfNamespace);
console.log(MyNamespace.PersonInNamespace);
console.log(MyNamespace.AnotherNamespace.anotherNamespace);
/// <reference path="module.ts"  />
console.log(MyNamespace.PersonInNamespace);
