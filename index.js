function produceDrivingRange(blockRange){
    return function (beginningBlock, endingBlock) {
        const beginningBlockInt = parseInt(beginningBlock);
        const endingBlockInt = parseInt(endingBlock);
        const distance = beginningBlockInt > endingBlockInt ? (beginningBlockInt - endingBlockInt) : (endingBlockInt - beginningBlockInt);
        if (distance <= blockRange) {
            return `within range by ${blockRange - distance}`;
          } else {
            return `${distance - blockRange} blocks out of range`;
        }
    }
}

function produceTipCalculator(rate) {
    return function(total) {
        return total * rate;
    }
}

function createDriver() {
    let driverId = 0;
    return class {
      constructor (name) {
        this.name = name;
        this.id = ++driverId;
      }
    }
  }