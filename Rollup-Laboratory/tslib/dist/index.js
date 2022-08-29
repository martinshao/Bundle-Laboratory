(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utilibs = {}));
})(this, (function (exports) { 'use strict';

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

  exports.human = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
