const fs = require("fs");

const code = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  .map((line) => {
    const input = line.split(" ");
    const res = {};
    res.op = input[0];
    if (res.op === "addx") {
      res.value = parseInt(input[1]);
    }
    return res;
  });

class CRT {
  constructor(width = 40, height = 6) {
    this.width = width;
    this.height = height;
    this.currentIndex = 0;

    this.content = new Array(this.height)
      .fill(0)
      .map(() => new Array(this.width).fill(" "));
  }
  runCycle(spritePosition) {
    const x = this.currentIndex % this.width;
    const y = Math.floor(this.currentIndex / this.width);

    if (y >= this.height) {
      return;
    }

    if (Math.abs(x - spritePosition) < 2) {
      this.content[y][x] = "#";
    } else {
      this.content[y][x] = ".";
    }
    this.currentIndex++;
  }

  printScreen() {
    console.log(this.content.map((line) => line.join("")).join("\n"));
  }
}

class CPU {
  constructor(code) {
    this.code = code;
    this.currentLine = 0;
    this.cycle = 1;
    this.wait = 0;
    this.registers = {
      X: 1,
    };
  }
  runCycle() {
    if (this.currentLine >= this.code.length) {
      return false;
    }
    this.cycle++;

    const line = this.code[this.currentLine];

    switch (line.op) {
      case "noop":
        this.currentLine++;
        break;
      case "addx":
        if (this.wait === 0) {
          this.wait = 1;
        } else {
          this.wait--;
          if (this.wait === 0) {
            this.registers.X += line.value;
            this.currentLine++;
          }
        }
        break;
      default:
        throw new Error(`Unknown instruction ${line.op}`);
    }

    return true;
  }
}

function part1() {
  const cpu = new CPU(code);
  let sum = 0;
  while (true) {
    if (!cpu.runCycle()) {
      break;
    }

    if (cpu.cycle % 40 === 20) {
      sum += cpu.registers.X * cpu.cycle;
    }
  }
  return sum;
}

function part2() {
  const cpu = new CPU(code);
  const crt = new CRT();
  while (true) {
    crt.runCycle(cpu.registers.X);
    if (!cpu.runCycle()) {
      break;
    }
  }
  crt.printScreen();
}

console.log(part1());
console.log(part2());
