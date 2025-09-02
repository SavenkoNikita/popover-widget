import Popover from '../src/js/Popover';

describe('Popover Basic', () => {
  test('should create Popover instance', () => {
    const button = document.createElement('button');
    const popover = new Popover(button);
    
    expect(popover).toBeInstanceOf(Popover);
    expect(popover.element).toBe(button);
    expect(popover.isVisible).toBe(false);
  });

  test('should have default title and content', () => {
    const button = document.createElement('button');
    const popover = new Popover(button);
    
    expect(popover.title).toBe('Popover Title');
    expect(popover.content).toBe('And here\'s some amazing content.');
  });

  test('should accept custom options', () => {
    const button = document.createElement('button');
    const popover = new Popover(button, {
      title: 'Custom Title',
      content: 'Custom Content'
    });
    
    expect(popover.title).toBe('Custom Title');
    expect(popover.content).toBe('Custom Content');
  });
});