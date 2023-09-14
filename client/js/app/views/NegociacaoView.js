"use strict";

System.register(["./View.js", "../helpers/DateConverter.js", "../controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var View, DateConverter, controller, _createRows, _createRow, NegociacaoView;
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
  function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
  function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
  function _createRows2(negociacoes) {
    var _this2 = this;
    return negociacoes.reduce(function (tr, n) {
      return tr + _classPrivateMethodGet(_this2, _createRow, _createRow2).call(_this2, n);
    }, '');
  }
  function _createRow2(negociacao) {
    return "<tr> \n        <td>".concat(DateConverter.dataPataTexto(negociacao.data), "</td>\n        <td>").concat(negociacao.quantidade, "</td>\n        <td>").concat(negociacao.valor, "</td>\n        <td>").concat(negociacao.volume, "</td>\n      </tr>");
  }
  return {
    setters: [function (_ViewJs) {
      View = _ViewJs.View;
    }, function (_helpersDateConverterJs) {
      DateConverter = _helpersDateConverterJs.DateConverter;
    }, function (_controllersNegociacaoControllerJs) {
      controller = _controllersNegociacaoControllerJs.default;
    }],
    execute: function () {
      _createRows = /*#__PURE__*/new WeakSet();
      _createRow = /*#__PURE__*/new WeakSet();
      _export("NegociacaoView", NegociacaoView = /*#__PURE__*/function (_View) {
        _inherits(NegociacaoView, _View);
        var _super = _createSuper(NegociacaoView);
        function NegociacaoView(element) {
          var _this;
          _classCallCheck(this, NegociacaoView);
          _this = _super.call(this, element);
          _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createRow);
          _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createRows);
          element.addEventListener('click', function (event) {
            if (event.target.nodeName == 'TH') {
              var item = event.target.textContent.toLowerCase();
              controller.ordenarPor(event, item);
            }
          });
          return _this;
        }
        _createClass(NegociacaoView, [{
          key: "template",
          value: function template(model) {
            return "  \n        <table class=\"table table-hover table-bordered\">\n        <thead>\n            <tr>\n                <th>DATA</th>\n                <th>QUANTIDADE</th>\n                <th>VALOR</th>\n                <th>VOLUME</th>\n            </tr>\n        </thead>\n        <tbody>\n            ".concat(_classPrivateMethodGet(this, _createRows, _createRows2).call(this, model.negociacoes), "\n        </tbody>\n        <tfoot>\n            <td colspan=\"3\"></td>\n            <td>").concat(model.volumeTotal, "</td>\n        </tfoot>\n    </table>");
          }
        }]);
        return NegociacaoView;
      }(View));
    }
  };
});
//# sourceMappingURL=NegociacaoView.js.map