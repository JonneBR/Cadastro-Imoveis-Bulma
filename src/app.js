class App {
  constructor(imovel, area, situation) {
    this.imovel = imovel;
    this.area = area;
    this.situation = situation;
  }
  getInputValues() {
    this.imovel = document.querySelector("input[name='imovel']:checked").value;
    this.area = document.querySelector("input[name='area']").value;
    this.situation = document.querySelector(
      "input[name='available']:checked",
    ).value;
    this.addElement();
  }
  addElement() {
    const buttonAlugado = document.getElementById('alugado');
    const buttonAlugadoClone = buttonAlugado.cloneNode(true);
    const tbodyElement = document.getElementById('tbodyElement');
    const formInput = [this.imovel, this.area, this.situation];
    const newTrElement = document.createElement('tr');
    formInput.forEach((value) => {
      if (value == 'Alugado') {
        newTrElement.appendChild(buttonAlugadoClone);
      } else if (value == 'Disponivel') {
        console.log('disponivel');
      }
      const newTdElement = document.createElement('td');
      newTdElement.innerHTML = value;
      newTrElement.appendChild(newTdElement);
      tbodyElement.appendChild(newTrElement);
    });
  }

  removeElement(event) {
    let elementSelectedToBeDeleted = event.parentElement.parentElement;
    elementSelectedToBeDeleted.remove();
  }
}

function start() {
  let initialize = new App();
  initialize.getInputValues();
}

function deleteElementFromList(event) {
  let deleteELement = new App();
  deleteELement.removeElement(event);
}
