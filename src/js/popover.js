export class Popover {
  constructor() {
    this._popover = document.createElement('div');
    this._popover.classList.add('popover');
    this._popover.innerHTML = ```
        <div class="arrow"></div>
        <h3 class="popover-header"></h3>
        <div class="popover-body"></div>
        ```
  }

  showPopover(element) {
    const popoverHeader = this._popover.querySelector('.popover-header');
    popoverHeader.textContent = element.title;
    const popoverBody = this._popover.querySelector('.popover-body');
    popoverBody.textContent = element.dataset.content;
    document.body.appendChild(this._popover);
  }
}

