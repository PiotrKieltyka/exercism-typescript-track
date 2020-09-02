class SpaceAge {
    readonly seconds: number = 0

    earthYear = 60 * 60 * 24 * 365.25
    mercuryYear = 0.2408467 * this.earthYear
    venusYear = 0.61519726 * this.earthYear
    marsYear = 1.8808158 * this.earthYear
    jupiterYear = 11.862615 * this.earthYear
    saturnYear = 29.447498 * this.earthYear
    uranusYear = 84.016846 * this.earthYear
    neptuneYear = 164.79132 * this.earthYear

    constructor(seconds: number) {
        this.seconds = seconds
    }

    onEarth() {
        return Number((this.seconds / this.earthYear).toFixed(2))
    }
    onMercury() {
        return Number((this.seconds / this.mercuryYear).toFixed(2))
    }
    onVenus() {
        return Number((this.seconds / this.venusYear).toFixed(2))
    }
    onMars() {
        return Number((this.seconds / this.marsYear).toFixed(2))
    }
    onJupiter() {
        return Number((this.seconds / this.jupiterYear).toFixed(2))
    }
    onSaturn() {
        return Number((this.seconds / this.saturnYear).toFixed(2))
    }
    onUranus() {
        return Number((this.seconds / this.uranusYear).toFixed(2))
    }
    onNeptune() {
        return Number((this.seconds / this.neptuneYear).toFixed(2))
    }
}
 export default SpaceAge
