var Person = (function () {
    function Person() {
    }
    Person.prototype.getInfo = function () {
        document.write("<br/>firstName:" + this.firstName + ", <br/>lastName: " + this.lastName + " <br/>");
    };
    return Person;
}());
//# sourceMappingURL=peron.js.map