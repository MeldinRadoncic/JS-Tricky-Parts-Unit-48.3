function curriedAdd(total) {
    if (total === undefined) {
      return 0;
    }
    return function(next) {
      if (next === undefined) {
        return total;
      }
      return curriedAdd(total + next);
    }
  }

module.exports = { curriedAdd };
