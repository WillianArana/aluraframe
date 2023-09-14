import { NegociacaoDTO } from '../helpers/NegociacaoDTO.js';

export class Negociacao {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = new Date(data);
    this.#quantidade = parseInt(quantidade);
    this.#valor = parseFloat(valor);
  }

  get data() {
    return this.#data;
  }

  get valor() {
    return this.#valor;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }

  isEquals(outraNegociacao) {
    return this.toString() == outraNegociacao.toString();
  }

  toString() {
    return this.toJSON().toString();
  }

  toJSON() {
    return new NegociacaoDTO(this);
  }
}
