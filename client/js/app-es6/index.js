import controller from './controllers/NegociacaoController.js';

document.querySelector('.form').onsubmit = controller.adiciona.bind(controller);
document.querySelector('.btn--apaga').onclick = controller.apaga.bind(controller);
