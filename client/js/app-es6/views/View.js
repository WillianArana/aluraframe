export class View {
  #element;

  constructor(element) {
    this.#element = element;
  }

  update(model) {
    this.#element.innerHTML = this.template(model);
  }
}
