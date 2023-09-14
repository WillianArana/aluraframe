import { Negociacao } from '../models/Negociacao.js';

export class NegociacaoDAO {
  #store = 'negociacoes';
  #connection;
  constructor(connection) {
    this.#connection = connection;
  }

  adiciona(negociacao) {
    return new Promise((resolve, reject) => {
      const request = this.#connection
        .transaction([this.#store], 'readwrite')
        .objectStore(this.#store)
        .add(negociacao.toJSON());

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (e) => {
        console.error(e.target.error);
        reject('Não foi possível adicionar negociação');
      };
    });
  }

  listaTodos() {
    return new Promise((resolve, reject) => {
      const cursor = this.#connection
        .transaction([this.#store], 'readonly')
        .objectStore(this.#store)
        .openCursor();

      const negociacoes = [];
      cursor.onsuccess = (e) => {
        const atual = e.target.result;
        if (atual) {
          const negociacao = new Negociacao(
            atual.value.data,
            atual.value.quantidade,
            atual.value.valor,
          );
          negociacoes.push(negociacao);
          atual.continue();
        } else {
          resolve(negociacoes);
        }
      };

      cursor.onerror = (e) => {
        console.error(e.target.error.name);
        reject('Não foi possível carregar as negociações');
      };
    });
  }

  apagarTodos() {
    return new Promise((resolve, reject) => {
      const request = this.#connection
        .transaction([this.#store], 'readwrite')
        .objectStore(this.#store)
        .clear();

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (e) => {
        console.error(e.target.error);
        reject('Não foi possível apagar as negociações');
      };
    });
  }
}
