export default class Popover {
  constructor(element, options = {}) {
    this.element = element;
    this.title = options.title || 'Popover Title';
    this.content = options.content || 'And here\'s some amazing content.';
    this.popover = null;
    this.isVisible = false;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  show() {
    if (this.isVisible) return;
    
    this.createPopover();
    this.positionPopover();
    this.isVisible = true;

    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleResize);
  }

  hide() {
    if (!this.isVisible) return;
    
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    }
    this.isVisible = false;

    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll() {
    if (this.isVisible) {
      this.positionPopover();
    }
  }

  handleResize() {
    if (this.isVisible) {
      this.positionPopover();
    }
  }

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.className = 'popover';
    this.popover.innerHTML = `
      <div class="popover-title">${this.title}</div>
      <div class="popover-content">${this.content}</div>
      <div class="popover-arrow"></div>
    `;
    document.body.appendChild(this.popover);
  }

  positionPopover() {
    if (!this.popover) return;

    const rect = this.element.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    
    const top = rect.top - popoverRect.height - 10;
    const left = rect.left + (rect.width - popoverRect.width) / 2;
    
    this.popover.style.position = 'absolute';
    this.popover.style.top = `${top}px`;
    this.popover.style.left = `${left}px`;
  }
}