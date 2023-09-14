"use strict";

System.register(["./controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var controller;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      controller = _controllersNegociacaoControllerJs.default;
    }],
    execute: function () {
      document.querySelector('.form').onsubmit = controller.adiciona.bind(controller);
      document.querySelector('.btn--apaga').onclick = controller.apaga.bind(controller);
    }
  };
});
//# sourceMappingURL=index.js.map