class Decorator {
  constructor(stock) {
    this.paintStock = []
  };

  addPaint(paintcan) {
    this.paintStock.push(paintcan)
  };

  paintStockTotal() {
    let total = 0;
    for (var i = 0; i < this.paintStock.length; i++) {
      total += this.paintStock[i].numberOfLitres
    }
    return total;
  };

  enoughPaint(room) {
    if (this.paintStockTotal() >= room.area) {
      return true;
    } else {
      return false;
    }

  };

  paintRoom(room) {
    if(this.enoughPaint(room) == true) {
      room.painted = true;
      for (var i = 0; i < this.paintStock.length; i++) {
        if(this.paintStock[i].numberOfLitres >= room.area) {
          this.paintStock[i].numberOfLitres -= room.area
        } else {
          room.area -= this.paintStock[i].numberOfLitres;
          this.paintStock[i].numberOfLitres = 0;
        }
      }
    } else {
      return 'Not enough Paint'
    }
  };

  removeEmptyPaint() {
    for (var i = 0; i < this.paintStock.length; i++) {
      if(this.paintStock[i].numberOfLitres == 0) {
        this.paintStock.splice(i, 1);
      }
    }
  }

};



module.exports = Decorator;
