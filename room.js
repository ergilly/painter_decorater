class Room {
  constructor(area, painted) {
    this.area = area;
    this.painted = painted;
  };

  // get painted() {
  //   return this._painted;
  // };
  //
  // set painted(painted) {
  //   this._painted = painted
  // };

  paint() {
    this.painted = true;
  };

};

module.exports = Room;
