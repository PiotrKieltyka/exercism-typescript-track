type MinesMap = string[];

class Minesweeper {
  private board: string[][] = [];
  private bomb = '*';

  annotate(minesweeperMap: MinesMap): MinesMap {
    this.board = minesweeperMap.map(minesMap => [...minesMap]);
    this.board.map( (minesMap, y) =>
      minesMap.map((val, x) => val === this.bomb && this.markBomb(x, y))
    );
    return this.board.map(b => b.join(''));
  }

  markBomb(x: number, y: number) {
    const coords = [-1, 0, 1];
    for (let i = y - 1; i <= y + 1; i++) {
      if (this.board[i] === undefined) continue;
      coords.forEach(b => {
        const x2 = x + b;
        if (this.board[i][x2] !== undefined && this.board[i][x2] !== this.bomb) {
          this.board[i][x2] = this.board[i][x2] === "" ? "1" : String(Number(this.board[i][x2]) + 1);
        }
      })
    }
  }
}

export default Minesweeper;
