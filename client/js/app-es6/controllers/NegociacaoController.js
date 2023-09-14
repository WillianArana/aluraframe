import { MensagemView } from '../views/MensagemView.js';
import { NegociacaoView } from '../views/NegociacaoView.js';
import { Bind } from '../helpers/Bind.js';
import { DateConverter } from '../helpers/DateConverter.js';
import { Mensagem } from '../models/Mensagem.js';
import { ListaNegociacao } from '../models/ListaNegociacao.js';
import { NegociacaoService } from '../services/NegociacaoService.js';

class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;
  #listaNegociacoes;
  #mensagem;
  #service;

  constructor() {
    this.#service = new NegociacaoService();
    window.addEventListener('load', () => {
      this.#onInit();
    });
  }

  get data() {
    return DateConverter.textoParaData(this.#inputData.value);
  }

  get quantidade() {
    return this.#inputQuantidade.value;
  }

  get valor() {
    return this.#inputValor.value;
  }

  #onInit() {
    const $ = document.querySelector.bind(document);
    this.#inputData = $('#data');
    this.#inputQuantidade = $('#quantidade');
    this.#inputValor = $('#valor');

    this.#mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagem')), 'texto');

    this.#listaNegociacoes = new Bind(
      new ListaNegociacao(),
      new NegociacaoView($('#negociacao')),
      'adiciona',
      'esvazia',
      'ordenarPor',
    );

    this.#carregarNegociacoesDoDatabase();
    this.#importarAutomaticamente();
  }

  async #carregarNegociacoesDoDatabase() {
    const negociacoes = await this.#service.listaTodos();
    this.#listaNegociacoes.adiciona(...negociacoes);
  }

  #importarAutomaticamente() {
    setInterval(() => {
      this.importa();
    }, 3000);
  }

  async adiciona(evento) {
    evento.preventDefault();
    const negociacao = await this.#service.cadastra(this);
    this.#listaNegociacoes.adiciona(negociacao);
    this.#limpaFormulario();
    this.#inputData.focus();
    this.#mensagem.texto = 'Negociação adicionada com sucesso';
  }

  #limpaFormulario() {
    this.#inputData.value = '';
    this.#inputQuantidade.value = 1;
    this.#inputValor.value = 0;
  }

  async apaga() {
    try {
      await this.#service.apagarTodos();
      this.#listaNegociacoes.esvazia();
      this.#mensagem.texto = 'Negociações apagadas com sucesso';
    } catch (error) {
      console.error(error);
      this.#mensagem.texto = 'Não foi possível apagar negociações';
    }
  }

  ordenarPor(evento, item) {
    evento.stopPropagation();
    evento.preventDefault();
    this.#listaNegociacoes.ordenarPor(item);
  }

  async importa() {
    try {
      const negociacoesExistentes = this.#listaNegociacoes.negociacoes;
      const negociacoes = await this.#service.importa(negociacoesExistentes);
      this.#listaNegociacoes.adiciona(...negociacoes);
      this.#mensagem.texto = 'Negociações importadas com sucesso';
    } catch (err) {
      console.log(err);
      this.#mensagem.texto = 'Não foi possível obter as negociações';
    }
  }
}

export default new NegociacaoController();
