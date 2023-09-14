export class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop) {
        if (props.includes(prop) && ProxyFactory.#ehFuncao(target[prop])) {
          return function () {
            Reflect.apply(target[prop], target, arguments);
            return acao(target);
          };
        }
        return target[prop];
      },
      set(target, prop, value, receiver) {
        const result = Reflect.set(target, prop, value, receiver);
        if (props.includes(prop)) {
          acao(target);
        }
        return result;
      },
    });
  }

  static #ehFuncao(input) {
    return typeof input == typeof Function;
  }
}
