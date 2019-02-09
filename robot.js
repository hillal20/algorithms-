class RobotGrid {
  constructor(n) {
    this.grid = [];

    for (let i = 0; i < n; i++) {
      this.grid.push([]);
      for (let j = 0; j < n; j++) {
        this.grid[i].push(false);
      }
    }
  }

  toggle(i, j) {
    this.grid[i][j] = !this.grid[i][j];
  }
  visited(i, j) {
    return this.grid[i][j];
  }
}

const pathCounter = n => {
  let paths = 0;
  const grid = new RobotGrid(n);

  const findPaths = (i, j) => {
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }
    if (i < 0 || j < 0 || i >= n || j >= n) {
      return;
    }
    if (grid.visited(i, j)) {
      return;
    } else {
      grid.toggle(i, j);
      findPaths(i, j + 1);
      findPaths(i + 1, j);
      findPaths(i, j - 1);
      findPaths(i - 1, j);
      grid.toggle(i, j);
    }
  };
  findPaths(0, 0);
  return paths;
};

console.log(pathCounter(6));
