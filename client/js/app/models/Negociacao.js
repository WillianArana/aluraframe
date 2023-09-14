"use strict";

System.register(["../helpers/NegociacaoDTO.js"], function (_export, _context) {
  "use strict";

  var NegociacaoDTO, _data, _quantidade, _valor, Negociacao;
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
  function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
  function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
  return {
    setters: [function (_helpersNegociacaoDTOJs) {
      NegociacaoDTO = _helpersNegociacaoDTOJs.NegociacaoDTO;
    }],
    execute: function () {
      _data = /*#__PURE__*/new WeakMap();
      _quantidade = /*#__PURE__*/new WeakMap();
      _valor = /*#__PURE__*/new WeakMap();
      _export("Negociacao", Negociacao = /*#__PURE__*/function () {
        function Negociacao(data, quantidade, valor) {
          _classCallCheck(this, Negociacao);
          _classPrivateFieldInitSpec(this, _data, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _quantidade, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldInitSpec(this, _valor, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldSet(this, _data, new Date(data));
          _classPrivateFieldSet(this, _quantidade, parseInt(quantidade));
          _classPrivateFieldSet(this, _valor, parseFloat(valor));
        }
        _createClass(Negociacao, [{
          key: "data",
          get: function get() {
            return _classPrivateFieldGet(this, _data);
          }
        }, {
          key: "valor",
          get: function get() {
            return _classPrivateFieldGet(this, _valor);
          }
        }, {
          key: "quantidade",
          get: function get() {
            return _classPrivateFieldGet(this, _quantidade);
          }
        }, {
          key: "volume",
          get: function get() {
            return _classPrivateFieldGet(this, _quantidade) * _classPrivateFieldGet(this, _valor);
          }
        }, {
          key: "isEquals",
          value: function isEquals(outraNegociacao) {
            return this.toString() == outraNegociacao.toString();
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.toJSON().toString();
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return new NegociacaoDTO(this);
          }
        }]);
        return Negociacao;
      }());
    }
  };
});
//# sourceMappingURL=Negociacao.js.map