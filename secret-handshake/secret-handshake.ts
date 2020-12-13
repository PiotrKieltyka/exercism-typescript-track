class HandShake {
  constructor(private command: number) {}

  commands(): Array<string> {
    const commands: Array<string> = []
    if (this.command & 1) commands.push('wink')
    if (this.command & 2) commands.push('double blink')
    if (this.command & 4) commands.push('close your eyes')
    if (this.command & 8) commands.push('jump')
    if (this.command & 16) commands.reverse()
    return commands
  }
}

export default HandShake;
