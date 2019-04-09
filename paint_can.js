class PaintCan {
  constructor(litres) {
    this.numberOfLitres = litres
  };

  isEmpty() {
    if (this.numberOfLitres === 0) {
      return true;
    } else {
      return false;
    }
  };

  emptySelf() {
    this.numberOfLitres = 0;
  };

};



module.exports = PaintCan;
