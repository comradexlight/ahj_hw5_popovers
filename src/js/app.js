import Popover from './popover';

const popoverFactory = new Popover();
let actualPopovers = [];
const form = document.querySelector('.form');

const showPopover = (el) => {
  actualPopovers.push({
    title: el.title,
    id: popoverFactory.showPopover(el),
  });
};

const removePopover = (el) => {
  const actualPopover = actualPopovers.find((p) => p.title === el.title);
  actualPopovers = actualPopovers.filter((p) => p.id !== actualPopover.id);
  popoverFactory.removePopover(actualPopover.id);
};

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    e.preventDefault();
    const found = actualPopovers.find((el) => {
      if (el.title === e.target.title) {
        return true;
      }

      return false;
    });
    if (!found) {
      showPopover(e.target);
    } else {
      removePopover(e.target);
    }
  }
});
