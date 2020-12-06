class Clock {
  readonly hours: number
  readonly minutes: number

  constructor(hours: number, minutes: number = 0) {
    this.hours = (24 + ((hours + Math.floor(minutes / 60)) % 24)) % 24
    this.minutes = (60 + (minutes % 60)) % 60
  }

  toString(): string {
    return `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`
  }

  plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes)
  }

  minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes)
  }

  equals(clock: Clock): boolean {
    return clock.hours === this.hours && clock.minutes === this.minutes
  }
}

export default Clock
