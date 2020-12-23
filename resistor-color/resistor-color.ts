export const colorCode = (color: string): number => {
    return color ? COLORS.indexOf(color.toLowerCase()) : -1;
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
