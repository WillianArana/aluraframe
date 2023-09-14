"use strict";

System.register(["../models/Negociacao.js"], function (_export, _context) {
  "use strict";

  var Negociacao, _store, _connection, NegociacaoDAO;
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
    setters: [function (_modelsNegociacaoJs) {
      Negociacao = _modelsNegociacaoJs.Negociacao;
    }],
    execute: function () {
      _store = /*#__PURE__*/new WeakMap();
      _connection = /*#__PURE__*/new WeakMap();
      _export("NegociacaoDAO", NegociacaoDAO = /*#__PURE__*/function () {
        function NegociacaoDAO(connection) {
          _classCallCheck(this, NegociacaoDAO);
          _classPrivateFieldInitSpec(this, _store, {
            writable: true,
            value: 'negociacoes'
          });
          _classPrivateFieldInitSpec(this, _connection, {
            writable: true,
            value: void 0
          });
          _classPrivateFieldSet(this, _connection, connection);
        }
        _createClass(NegociacaoDAO, [{
          key: "adiciona",
          value: function adiciona(negociacao) {
            var _this = this;
            return new Promise(function (resolve, reject) {
              var request = _classPrivateFieldGet(_this, _connection).transaction([_classPrivateFieldGet(_this, _store)], 'readwrite').objectStore(_classPrivateFieldGet(_this, _store)).add(negociacao.toJSON());
              request.onsuccess = function () {
                resolve();
              };
              request.onerror = function (e) {
                console.error(e.target.error);
                reject('Não foi possível adicionar negociação');
              };
            });
          }
        }, {
          key: "listaTodos",
          value: function listaTodos() {
            var _this2 = this;
            return new Promise(function (resolve, reject) {
              var cursor = _classPrivateFieldGet(_this2, _connection).transaction([_classPrivateFieldGet(_this2, _store)], 'readonly').objectStore(_classPrivateFieldGet(_this2, _store)).openCursor();
              var negociacoes = [];
              cursor.onsuccess = function (e) {
                var atual = e.target.result;
                if (atual) {
                  var negociacao = new Negociacao(atual.value.data, atual.value.quantidade, atual.value.valor);
                  negociacoes.push(negociacao);
                  atual["continue"]();
                } else {
                  resolve(negociacoes);
                }
              };
              cursor.onerror = function (e) {
                console.error(e.target.error.name);
                reject('Não foi possível carregar as negociações');
              };
            });
          }
        }, {
          key: "apagarTodos",
          value: function apagarTodos() {
            var _this3 = this;
            return new Promise(function (resolve, reject) {
              var request = _classPrivateFieldGet(_this3, _connection).transaction([_classPrivateFieldGet(_this3, _store)], 'readwrite').objectStore(_classPrivateFieldGet(_this3, _store)).clear();
              request.onsuccess = function () {
                resolve();
              };
              request.onerror = function (e) {
                console.error(e.target.error);
                reject('Não foi possível apagar as negociações');
              };
            });
          }
        }]);
        return NegociacaoDAO;
      }());
    }
  };
});
//# sourceMappingURL=NegociacaoDAO.js.map