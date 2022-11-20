import Popover from './popover';

export default class BtnWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;
    this._actualPopovers = [];
    this._popoverFactory = new Popover();

    this._element.addEventListener('click', (e) => {
      if (e.target.classList.contains('button')) {
        e.preventDefault();
        const found = this._actualPopovers.find((el) => {
          if (el.title === e.target.title) {
            return true;
          }

          return false;
        });

        if (!found) {
          this.showPopover(e.target);
        } else {
          this.removePopover(e.target);
        }
      }
    });
  }

  showPopover = (el) => {
    this._actualPopovers.push({
      title: el.title,
      id: this._popoverFactory.showPopover(el),
    });
  };

  removePopover = (el) => {
    const actualPopover = this._actualPopovers.find((p) => p.title === el.title);
    this._actualPopovers = this._actualPopovers.filter((p) => p.id !== actualPopover.id);
    this._popoverFactory.removePopover(actualPopover.id);
  };
}
