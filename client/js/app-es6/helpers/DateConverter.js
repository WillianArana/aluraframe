export class DateConverter {
  constructor() {
    throw new Error('Você não pode criar uma instância dessa classe');
  }

  static textoParaData(texto) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
      throw new Error('Deve estar no formato aaaa-mm-dd');
    }
    const [ano, mes, dia] = texto.split('-');
    return new Date(ano, mes - 1, dia);
  }

  static dataPataTexto(data) {
    return data.toLocaleDateString('pt-BR');
  }
}
