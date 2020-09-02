class ProteinTranslation {
  static codons: Record<string, string[]> = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA']
  }

  static proteins(sequence: string): string[] {
    const translated: string[] = []

    const codonsArr = new Array(sequence.length / 3)
      .fill('')
      .map((_, i) => sequence.substr(Math.max(0, i * 3), 3)) as string[]

    for (let codon of codonsArr) {
      const translation = Object.keys(ProteinTranslation.codons)
        .find( c => ProteinTranslation.codons[c].includes(codon)) as string
      if (translation === 'STOP') return translated
      translated.push(translation)
    }

    return translated
  }
}

export default ProteinTranslation
