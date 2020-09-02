export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind() {
        for (let side of this.sides) {
            if (side <= 0) throw new Error()
        }

        const [x, y, z] = this.sides
        if (x + y < z || x + z < y || y + z < x) throw new Error()

        if (x === y && y === z) return 'equilateral'
        else if ( x === y || x === z || y === z) return 'isosceles'
        else return 'scalene'
    }
}
