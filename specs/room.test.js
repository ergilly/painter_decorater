const Room = require('../room');



describe('Room', () => {

  let room;

  beforeEach(() => {
    room = new Room(10, false);
  });

  test('Room should start not painted', () => {
    expect(room.painted).toBe(false);
  });

  test('Room should be able to be painted', () => {
    room.paint();
    expect(room.painted).toBe(true);
  });
});
