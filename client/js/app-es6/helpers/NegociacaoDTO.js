export class NegociacaoDTO {
  constructor(negociacao) {
    this.data = negociacao.data;
    this.valor = negociacao.valor;
    this.quantidade = negociacao.quantidade;
    Object.freeze(this);
  }

  toString() {
    return JSON.stringify(this);
  }
}
