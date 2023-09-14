"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var _class, ConnectionFactory, _currentVersion, _dbName, _dbConnection, _close, _migrations;
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
  function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
  function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
  function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
  function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
  function _onUpgradeIfIsVesion(event) {
    var version = 1;
    if (event.oldVersion < version) {
      var dbConnection = event.target.result;
      var stores = _classStaticPrivateFieldSpecGet(_class, _class, _migrations)[version];
      var _iterator = _createForOfIteratorHelper(stores),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;
          dbConnection.createObjectStore(store, {
            autoIncrement: true
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
  return {
    setters: [],
    execute: function () {
      _export("ConnectionFactory", ConnectionFactory = /*#__PURE__*/function () {
        function ConnectionFactory() {
          _classCallCheck(this, ConnectionFactory);
          throw new Error('Não é possível criar instâncias de ConnectionFactory');
        }
        _createClass(ConnectionFactory, null, [{
          key: "getConnection",
          value: function getConnection() {
            var _this = this;
            return new Promise(function (resolve, reject) {
              if (_classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _dbConnection)) {
                resolve(_classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _dbConnection));
                return;
              }
              var version = _classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _currentVersion);
              var dbName = _classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _dbName);
              var request = window.indexedDB.open(dbName, version);
              request.onupgradeneeded = function (event) {
                _classStaticPrivateMethodGet(_this, ConnectionFactory, _onUpgradeIfIsVesion).call(_this, event);
              };
              request.onsuccess = function () {
                var dbConnection = request.result;
                _classStaticPrivateFieldSpecSet(ConnectionFactory, ConnectionFactory, _dbConnection, dbConnection);
                _classStaticPrivateFieldSpecSet(ConnectionFactory, ConnectionFactory, _close, dbConnection.close.bind(dbConnection));
                dbConnection.close = null;
                resolve(dbConnection);
              };
              request.onerror = function () {
                var error = request.error;
                console.error(error);
                reject(error.name);
              };
            });
          }
        }, {
          key: "closeConnection",
          value: function closeConnection() {
            if (_classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _close)) {
              _classStaticPrivateFieldSpecGet(ConnectionFactory, ConnectionFactory, _close).call(ConnectionFactory);
              _classStaticPrivateFieldSpecSet(ConnectionFactory, ConnectionFactory, _dbConnection, null);
              _classStaticPrivateFieldSpecSet(ConnectionFactory, ConnectionFactory, _close, null);
            }
          }
        }]);
        return ConnectionFactory;
      }());
      _class = ConnectionFactory;
      _currentVersion = {
        writable: true,
        value: 1
      };
      _dbName = {
        writable: true,
        value: 'aluraframe'
      };
      _dbConnection = {
        writable: true,
        value: null
      };
      _close = {
        writable: true,
        value: null
      };
      _migrations = {
        writable: true,
        value: _defineProperty({}, _classStaticPrivateFieldSpecGet(_class, _class, _currentVersion), ['negociacoes'])
      };
    }
  };
});
//# sourceMappingURL=ConnectionFactory.js.map