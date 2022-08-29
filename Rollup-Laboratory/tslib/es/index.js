var Human = /** @class */ (function () {
    function Human(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Human.prototype.getName = function () {
        return this.name;
    };
    Human.prototype.getAge = function () {
        return this.age;
    };
    return Human;
}());
function HumanFactory(name, age, sex) {
    return new Human(name, age, sex);
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Human: Human,
  HumanFactory: HumanFactory
});

export { index as human };
