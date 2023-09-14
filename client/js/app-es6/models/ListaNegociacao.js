export class ListaNegociacao {
  #negociacoes;
  #volumeTotal = 0.0;

  #direcoes = new Map([
    ['data', 1],
    ['quantidade', 1],
    ['valor', 1],
    ['volume', 1],
  ]);

  constructor() {
    this.#negociacoes = [];
  }

  get negociacoes() {
    return [...this.#negociacoes];
  }

  get volumeTotal() {
    return this.#volumeTotal;
  }

  adiciona(...negociacao) {
    this.#negociacoes.push(...negociacao);
    this.#volumeTotal += negociacao.reduce((p, c) => p + c.volume, 0);
  }

  esvazia() {
    this.#negociacoes = [];
    this.#volumeTotal = 0;
  }

  ordenarPor(item) {
    const direcao = this.#obterDirecao(item);
    this.#negociacoes = this.#negociacoes.sort(
      (a, b) => direcao * (a[item] < b[item] ? -1 : Number(a[item] > b[item])),
    );
  }

  #obterDirecao(item) {
    const direcao = this.#direcoes.get(item);
    this.#direcoes.set(item, direcao * -1);
    return direcao;
  }
}
