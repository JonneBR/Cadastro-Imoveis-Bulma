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
    const tbodyElement = document.getElementById('tbodyElement');
    const formInput = [this.imovel, this.area, this.situation];
    const newTrElement = document.createElement('tr');

    for (let i = 0; i < formInput.length - 1; i++) {
      const newTdElement = document.createElement('td');
      // if (formInput[i] == 'Alugado') {
      //   newTrElement.appendChild(this.rentStatus('danger', 'Alugado'));
      //   newTdElement.appendChild(this.deleteElementBtn());
      //   newTrElement.appendChild(newTdElement);
      //   break;
      // } else if (formInput[i] == 'Disponivel') {
      //   newTrElement.appendChild(this.rentStatus('success', 'Disponivel'));
      //   newTdElement.appendChild(this.deleteElementBtn());
      //   newTrElement.appendChild(newTdElement);
      //   break;
      // }
      newTdElement.innerHTML = formInput[i];
      newTrElement.appendChild(newTdElement);
      tbodyElement.appendChild(newTrElement);
    }
    const newTdElement = document.createElement('td');
    if (this.situation == 'Alugado') {
      newTrElement.appendChild(this.rentStatus('danger', 'Alugado'));
      newTdElement.appendChild(this.deleteElementBtn());
      newTrElement.appendChild(newTdElement);
    } else {
      newTrElement.appendChild(this.rentStatus('success', 'Disponivel'));
      newTdElement.appendChild(this.deleteElementBtn());
      newTrElement.appendChild(newTdElement);
    }
  }

  rentStatus(backgroundColor, rentSituation) {
    const tdRentStatus = document.createElement('td');
    tdRentStatus.setAttribute(
      'class',
      'tag is-' + backgroundColor + ' is-medium',
    );
    tdRentStatus.textContent = rentSituation;
    console.log(tdRentStatus);
    return tdRentStatus;
  }

  deleteElementBtn() {
    const buttonDelete = document.createElement('a');
    buttonDelete.setAttribute('class', 'delete tag is-danger');
    buttonDelete.setAttribute('onclick', 'deleteElementFromList(this)');
    return buttonDelete;
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
