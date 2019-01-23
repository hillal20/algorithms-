class RobotGrid {
  constructor(n) {
    this.grid = [];

    for (let i = 0; i < n; i++) {
      this.grid.push([]);
    }
  }
}
const grid = new RobotGrid(4);
console.log(grid);
