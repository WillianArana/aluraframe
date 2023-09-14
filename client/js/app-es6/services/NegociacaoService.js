import { NegociacaoDAO } from '../dao/NegociacaoDAO.js';
import { NegociacaoDTO } from '../helpers/NegociacaoDTO.js';
import { Negociacao } from '../models/Negociacao.js';
import { ConnectionFactory } from './ConnectionFactory.js';

export class NegociacaoService {
  async cadastra(negociacao) {
    const connection = await ConnectionFactory.getConnection();
    const negociacaoDAO = new NegociacaoDAO(connection);

    negociacao = new Negociacao(negociacao.data, negociacao.quantidade, negociacao.valor);
    await negociacaoDAO.adiciona(negociacao);
    return negociacao;
  }

  async apagarTodos() {
    const connection = await ConnectionFactory.getConnection();
    const negociacaoDAO = new NegociacaoDAO(connection);
    return negociacaoDAO.apagarTodos();
  }

  async listaTodos() {
    const connection = await ConnectionFactory.getConnection();
    const negociacaoDAO = new NegociacaoDAO(connection);
    return negociacaoDAO.listaTodos();
  }

  async importa(listaAtual) {
    const resquests = await Promise.all([
      this.obterNegociacoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada(),
    ]);

    const negociacoes = [];
    for await (let request of resquests) {
      for await (let negociacao of request) {
        negociacao = new NegociacaoDTO(negociacao);
        if (listaAtual.some((n) => n.isEquals(negociacao))) continue;
        negociacao = await this.cadastra(negociacao);
        negociacoes.push(negociacao);
      }
    }

    return negociacoes;
  }

  async obterNegociacoesDaSemana() {
    const url = 'negociacoes/semana';
    return this.#obterNegociacoes(url);
  }

  async #obterNegociacoes(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const negociacoes = await response.json();
    return negociacoes.map((n) => new NegociacaoDTO(n));
  }

  async obterNegociacoesDaSemanaAnterior() {
    const url = 'negociacoes/anterior';
    return this.#obterNegociacoes(url);
  }

  async obterNegociacoesDaSemanaRetrasada() {
    const url = 'negociacoes/retrasada';
    return this.#obterNegociacoes(url);
  }
}
