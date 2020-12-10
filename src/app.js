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
    const buttonDisponivel = document.getElementById('disponivel');
    const buttonDisponivelClone = buttonDisponivel.cloneNode(true);
    const buttonDelete = document.getElementById('deleteElement');
    const buttonDeleteClone = buttonDelete.cloneNode(true);

    const tbodyElement = document.getElementById('tbodyElement');
    const formInput = [this.imovel, this.area, this.situation];
    const newTrElement = document.createElement('tr');

    for (let i = 0; i < formInput.length; i++) {
      const newTdElement = document.createElement('td');
      if (formInput[i] == 'Alugado') {
        newTrElement.appendChild(buttonAlugadoClone);
        newTdElement.appendChild(buttonDeleteClone);
        newTrElement.appendChild(newTdElement);
        break;
      } else if (formInput[i] == 'Disponivel') {
        newTrElement.appendChild(buttonDisponivelClone);
        newTdElement.appendChild(buttonDeleteClone);
        newTrElement.appendChild(newTdElement);
        break;
      }
      newTdElement.innerHTML = formInput[i];
      newTrElement.appendChild(newTdElement);
      tbodyElement.appendChild(newTrElement);
    }
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
