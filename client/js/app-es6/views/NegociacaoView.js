import { View } from './View.js';
import { DateConverter } from '../helpers/DateConverter.js';
import controller from '../controllers/NegociacaoController.js';

export class NegociacaoView extends View {
  constructor(element) {
    super(element);

    element.addEventListener('click', (event) => {
      if (event.target.nodeName == 'TH') {
        const item = event.target.textContent.toLowerCase();
        controller.ordenarPor(event, item);
      }
    });
  }

  template(model) {
    return `  
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
            ${this.#createRows(model.negociacoes)}
        </tbody>
        <tfoot>
            <td colspan="3"></td>
            <td>${model.volumeTotal}</td>
        </tfoot>
    </table>`;
  }

  #createRows(negociacoes) {
    return negociacoes.reduce((tr, n) => tr + this.#createRow(n), '');
  }

  #createRow(negociacao) {
    return `<tr> 
        <td>${DateConverter.dataPataTexto(negociacao.data)}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
        <td>${negociacao.volume}</td>
      </tr>`;
  }
}
