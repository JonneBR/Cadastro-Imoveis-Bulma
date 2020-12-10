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
    const tdRentStatus = document.createElement('td');
    tdRentStatus.setAttribute('class', 'tag is-success is-medium');
    tdRentStatus.textContent = 'Disponivel';

    const buttonDelete2 = document.createElement('a');
    buttonDelete2.setAttribute('class', 'delete tag is-danger');
    buttonDelete2.setAttribute('onclick', 'deleteElementFromList(this)');

    const tbodyElement = document.getElementById('tbodyElement');
    const formInput = [this.imovel, this.area, this.situation];
    const newTrElement = document.createElement('tr');

    for (let i = 0; i < formInput.length; i++) {
      const newTdElement = document.createElement('td');
      if (formInput[i] == 'Alugado') {
        tdRentStatus.setAttribute('class', 'tag is-danger is-medium');
        tdRentStatus.textContent = 'Alugado';
        newTrElement.appendChild(tdRentStatus);
        newTdElement.appendChild(buttonDelete2);
        newTrElement.appendChild(newTdElement);
        break;
      } else if (formInput[i] == 'Disponivel') {
        newTrElement.appendChild(tdRentStatus);
        newTdElement.appendChild(buttonDelete2);
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
function deleteElementFromList(event) {
  let deleteELement = new App();
  deleteELement.removeElement(event);
}
