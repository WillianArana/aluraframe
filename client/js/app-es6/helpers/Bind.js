import { ProxyFactory } from '../services/ProxyFactory.js';

export class Bind {
  constructor(model, view, ...props) {
    const proxy = ProxyFactory.create(model, props, (m) => view.update(m));
    view.update(model);
    return proxy;
  }
}
