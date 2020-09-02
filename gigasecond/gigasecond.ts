class Gigasecond {

  private dateObject: Date

  constructor(date: Date) {
    this.dateObject = date
  }

  date(): Date {
    return new Date(this.dateObject.valueOf() + (Math.pow(10,9) * 1000))
  }
}

export default Gigasecond
