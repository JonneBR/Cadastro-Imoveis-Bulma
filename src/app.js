class App {
  constructor(imovel, area, backgroundColor) {
    this.imovel = imovel;
    this.area = area;
    this.backgroundColor = backgroundColor;
  }
  getInputValues() {
    this.imovel = document.querySelector("input[name='imovel']:checked").value;
    this.area = document.querySelector("input[name='area']").value;
    this.backgroundColor = document.querySelector(
      "input[name='available']:checked",
    ).value;
    this.addElement();
  }
  addElement() {
    const tbodyElement = document.getElementById('tbodyElement');
    const formInput = [this.imovel, this.area, this.backgroundColor];
    const newTrElement = document.createElement('tr');

    for (let i = 0; i < formInput.length; i++) {
      const newTdElement = document.createElement('td');
      if (formInput[i] == 'Alugado') {
        newTrElement.appendChild(this.rentStatus('danger', 'Alugado'));
        newTdElement.appendChild(this.deleteElementBtn());
        newTrElement.appendChild(newTdElement);
        break;
      } else if (formInput[i] == 'Disponivel') {
        newTrElement.appendChild(this.rentStatus('success', 'Disponivel'));
        newTdElement.appendChild(this.deleteElementBtn());
        newTrElement.appendChild(newTdElement);
        break;
      }
      newTdElement.innerHTML = formInput[i];
      newTrElement.appendChild(newTdElement);
      tbodyElement.appendChild(newTrElement);
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
