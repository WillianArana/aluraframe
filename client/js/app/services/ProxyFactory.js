"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ProxyFactory;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
  function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
  function _ehFuncao(input) {
    return _typeof(input) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
  }
  return {
    setters: [],
    execute: function () {
      _export("ProxyFactory", ProxyFactory = /*#__PURE__*/function () {
        function ProxyFactory() {
          _classCallCheck(this, ProxyFactory);
        }
        _createClass(ProxyFactory, null, [{
          key: "create",
          value: function create(objeto, props, acao) {
            return new Proxy(objeto, {
              get: function get(target, prop) {
                if (props.includes(prop) && _classStaticPrivateMethodGet(ProxyFactory, ProxyFactory, _ehFuncao).call(ProxyFactory, target[prop])) {
                  return function () {
                    Reflect.apply(target[prop], target, arguments);
                    return acao(target);
                  };
                }
                return target[prop];
              },
              set: function set(target, prop, value, receiver) {
                var result = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) {
                  acao(target);
                }
                return result;
              }
            });
          }
        }]);
        return ProxyFactory;
      }());
    }
  };
});
//# sourceMappingURL=ProxyFactory.js.map