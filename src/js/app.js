import Popover from './Popover.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('popoverBtn');
  
  const popover = new Popover(button, {
    title: 'Popover Title',
    content: 'Here is the popover content. You can put any text or HTML content here.'
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    popover.toggle();
  });

  document.addEventListener('click', (e) => {
    if (popover.isVisible && 
        !popover.element.contains(e.target) && 
        (!popover.popover || !popover.popover.contains(e.target))) {
      popover.hide();
    }
  });
});