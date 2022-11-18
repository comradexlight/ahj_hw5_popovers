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

    const { left, top } = element.getBoundingClientRect();

    popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - 40}px`;

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((p) => p.id === id);
    popover.element.remove();
    this._popovers = this._popovers.filter((p) => p.id !== id);
  }
}
