import Popover from './popover';

const popoverFactory = new Popover();
const actualPopovers = [];
const form = document.querySelector('.form');

const showPopover = (el) => {
  actualPopovers.push({
    title: el.title,
    id: popoverFactory.showPopover(el),
  });
};

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    e.preventDefault();
    

    console.log(e.target.title)
    const found = actualPopovers.forEach((el) => {
      if (el.title === e.target.title) {
        return true;
      }

      return false;
    });
    if (found) {
      console.log('here');
    } else {
      showPopover(e.target);
    }
  }
});
