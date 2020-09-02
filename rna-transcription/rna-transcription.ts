class Transcriptor {
    toRna(dnastr: string): string {
        let rnastr: string = '';
        dnastr.split('').forEach( el => {
            switch (el) {
                case('C'): rnastr += 'G'; break
                case('G'): rnastr += 'C'; break
                case('A'): rnastr += 'U'; break
                case('T'): rnastr += 'A'; break
                default: throw 'Invalid input DNA.'; break
            }
        })
        return rnastr
    }
}

export default Transcriptor
