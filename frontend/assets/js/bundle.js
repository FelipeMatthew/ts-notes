/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
  (() => {
    var exports = __webpack_exports__;
    /*!**********************************!*\
  !*** ./src/A0022-Class/class.ts ***!
  \**********************************/

    Object.defineProperty(exports, '__esModule', { value: true });
    exports.Collaborator = exports.Company = void 0;
    class Company {
      constructor(name, cnpj) {
        this.collaborators = [];
        this.name = name;
        this.cnpj = cnpj;
      }
      insertCollaborator(collaborator) {
        this.collaborators.push(collaborator);
      }
      showCollaborators() {
        for (const collaborator of this.collaborators) {
          console.log(collaborator);
        }
      }
    }
    exports.Company = Company;
    class Collaborator {
      constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
      }
    }
    exports.Collaborator = Collaborator;
    const company1 = new Company('Facebook', '466-397-760/0001-55');
    const colab1 = new Collaborator('felipe', 'matthew', 19);
    const colab2 = new Collaborator('luiz', 'otávio', 12);
    const colab3 = new Collaborator('maria', 'rita', 39);
    company1.insertCollaborator(colab1);
    company1.insertCollaborator(colab2);
    company1.insertCollaborator(colab3);
    company1.showCollaborators();
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
