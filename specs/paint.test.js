const PaintCan = require('../paint_can');

describe('PaintCan', () => {

  let paintcan;

  beforeEach(() => {
    paintcan = new PaintCan(5);
  });

  test('Check if empty', () => {
    expect(paintcan.isEmpty()).toBe(false);
  })

  test('Be able to empty itself', () => {
    paintcan.emptySelf();
    expect(paintcan.isEmpty()).toBe(true);
  })
});
