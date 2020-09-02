class Matrix {
  private matrix: string
  public rows: number[][] = new Array<number[]>()
  public columns: number[][] = new Array<number[]>()

  constructor(matrix: string) {
    this.matrix = matrix
    this.parseMatrix()
  }

  private parseMatrix(): void {
    this.parseRows()
    this.parseColumns()
  }

  private parseRows(): void {
    this.rows = this.matrix.split('\n').map(row => row.split(' ').map(num => parseInt(num, 10)))
  }

  private parseColumns(): void {
    for (let i = 0; i < this.rows[0].length; i++) {
      this.columns.push([])
      for (let j = 0; j < this.rows.length; j++) {
        this.columns[i].push(this.rows[j][i])
      }
    }
  }
}

export default Matrix
