"use strict";

System.register(["../services/ProxyFactory.js"], function (_export, _context) {
  "use strict";

  var ProxyFactory, Bind;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  return {
    setters: [function (_servicesProxyFactoryJs) {
      ProxyFactory = _servicesProxyFactoryJs.ProxyFactory;
    }],
    execute: function () {
      _export("Bind", Bind = /*#__PURE__*/_createClass(function Bind(model, view) {
        _classCallCheck(this, Bind);
        for (var _len = arguments.length, props = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          props[_key - 2] = arguments[_key];
        }
        var proxy = ProxyFactory.create(model, props, function (m) {
          return view.update(m);
        });
        view.update(model);
        return proxy;
      }));
    }
  };
});
//# sourceMappingURL=Bind.js.map