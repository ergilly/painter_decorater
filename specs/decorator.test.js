const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe('Decorator', () => {

  let decorator;
  let paintcan1;
  let paintcan2;
  let room;

  beforeEach(() => {
    decorator = new Decorator([]);
    paintcan1 = new PaintCan(5);
    paintcan2 = new PaintCan(10);
    room = new Room(12, false)
  });

  test('Starts with empty paint stock', () => {
    expect(decorator.paintStock).toEqual([]);
  });

  test('Be able to add a can to paintstock', () => {
    decorator.addPaint(paintcan1);
    expect(decorator.paintStock.length).toBe(1);
  });

  test('Be able to calculate total litres', () => {
    decorator.addPaint(paintcan1);
    decorator.addPaint(paintcan2);
    expect(decorator.paintStockTotal()).toBe(15);
  });

  test('Is there eneough paint to paint a room', () => {
    decorator.addPaint(paintcan1);
    decorator.addPaint(paintcan2);
    expect(decorator.enoughPaint(room)).toBe(true);
  });

  test('Be able to paint room', () => {
    decorator.addPaint(paintcan1);
    decorator.addPaint(paintcan2);
    decorator.paintRoom(room);
    expect(room.painted).toBe(true);
  });

  test('paint stock to decrease when painting room', () => {
    decorator.addPaint(paintcan1);
    decorator.addPaint(paintcan2);
    decorator.paintRoom(room);
    expect(decorator.paintStockTotal()).toBe(3);
  });

  test('remove empty paintcans from stock', () => {
    decorator.addPaint(paintcan1);
    decorator.addPaint(paintcan2);
    decorator.paintRoom(room);
    decorator.removeEmptyPaint();
    expect(decorator.paintStock.length).toBe(1);
  })

});
