export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    const popoverHTML = `
        <div class="arrow"></div>
        <h3 class="popover-header"></h3>
        <div class="popover-body"></div>
        `;
    popoverElement.innerHTML = popoverHTML;
    const popoverHeader = popoverElement.querySelector('.popover-header');
    popoverHeader.textContent = element.title;
    const popoverBody = popoverElement.querySelector('.popover-body');
    popoverBody.textContent = element.dataset.content;
    const id = performance.now();
    this._popovers.push({
      id,
      element: popoverElement,
    });
    document.body.appendChild(popoverElement);

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((p) => p.id === id);
    popover.element.remove();
    this._popovers = this._popovers.filter((p) => p.id !== id);
  }
}
