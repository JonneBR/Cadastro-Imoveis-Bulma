class App {
  constructor(imovel, area, situation) {
    this.imovel = imovel;
    this.area = area;
    this.situation = situation;
  }
  getInputValues() {
    let imovelType = document.querySelector("input[name='imovel']:checked");
    let totalArea = document.querySelector("input[name='area']").value;
    let isImovelAvailable = document.querySelector(
      "input[name='available']:checked",
    );
    console.log(imovelType.value);
    console.log(totalArea);
    console.log(isImovelAvailable.value);
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
