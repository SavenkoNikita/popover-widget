import Popover from '../src/js/Popover';

describe('Popover', () => {
  let button;
  let popover;

  beforeEach(() => {
    button = document.createElement('button');
    button.textContent = 'Test Button';
    button.id = 'test-button';
    document.body.appendChild(button);

    popover = new Popover(button);
  });

  afterEach(() => {
    if (document.body.contains(button)) {
      document.body.removeChild(button);
    }
    if (popover.isVisible) {
      popover.hide();
    }
  });

  test('should show and hide popover', () => {
    popover.show();
    expect(popover.isVisible).toBe(true);
    expect(document.querySelector('.popover')).not.toBeNull();

    popover.hide();
    expect(popover.isVisible).toBe(false);
    expect(document.querySelector('.popover')).toBeNull();
  });

  test('should toggle popover', () => {
    popover.toggle();
    expect(popover.isVisible).toBe(true);

    popover.toggle();
    expect(popover.isVisible).toBe(false);
  });

  test('should create popover with correct content', () => {
    popover.show();
    
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).not.toBeNull();
    
    const title = popoverElement.querySelector('.popover-title');
    const content = popoverElement.querySelector('.popover-content');
    
    expect(title.textContent).toBe('Popover Title');
    expect(content.textContent).toBe('And here\'s some amazing content.');
  });
});