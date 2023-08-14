const fs = require("fs");

const lines = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  .map((line) => {
    const [letter, number] = line.split(" ");
    return {
      direction: letter,
      totalMoves: parseInt(number),
    };
  });

// Define the possible moves for each direction
const movesDefinition = {
  R: {
    x: 1,
    y: 0,
  },
  L: {
    x: -1,
    y: 0,
  },
  U: {
    x: 0,
    y: -1,
  },
  D: {
    x: 0,
    y: 1,
  },
};

// Define a Point class to represent the position of a knot
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Move the point in a given direction
  move(direction) {
    const delta = movesDefinition[direction];
    this.x += delta.x;
    this.y += delta.y;
  }

  // Move the point to follow another point
  follow(point) {
    const distance = Math.max(
      Math.abs(this.x - point.x),
      Math.abs(this.y - point.y)
    );

    // If the distance between the two points is greater than one, move this point
    if (distance > 1) {
      const directionX = point.x - this.x;
      this.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
      const directionY = point.y - this.y;
      this.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
    }
  }
}

// Helper function to mark a position as visited
function markVisited(x, y, visited) {
  visited.add(`${x}-${y}`);
}

function part1() {
  const head = new Point(0, 0);
  const tail = new Point(0, 0);
  const visited = new Set();
  markVisited(0, 0, visited);

  for (const line of lines) {
    for (let i = 0; i < line.totalMoves; i++) {
      head.move(line.direction);
      tail.follow(head);
      markVisited(tail.x, tail.y, visited);
    }
  }

  console.log(visited.size);
}

function part2() {
  const knots = new Array(10).fill(0).map((_) => new Point(0, 0));
  const visited = new Set();
  markVisited(0, 0, visited);

  for (const line of lines) {
    for (let i = 0; i < line.totalMoves; i++) {
      // Move the head according to the instructions
      knots[0].move(line.direction);
      // Move the rest of the rope
      for (let knot = 1; knot < knots.length; knot++) {
        const point = knots[knot];
        point.follow(knots[knot - 1]);
      }
      const tail = knots[knots.length - 1];
      markVisited(tail.x, tail.y, visited);
    }
  }

  console.log(visited.size);
}

part1();
part2();
