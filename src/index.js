
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
      }
    
      return matrix.reduce((acc, row, index) => {
        if (index % 2 === 0) {
          return acc.concat(row);
        } else {
          return acc.concat(row.reverse());
        }
      }, []);
}
