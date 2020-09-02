class ReverseString {
    static reverse(str: string): string {
        let result = []
        for (let i = str.length; i >= 0; i--) {
            result.push(str[i])
        }
        return result.join('')
    }
}

export default ReverseString
