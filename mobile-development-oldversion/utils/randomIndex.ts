export default (array: any[]) => (blocked: number = -1) => {
    let n = Math.floor(Math.random() * array.length);
    while (n == blocked)
        n = Math.floor(Math.random() * array.length);
    return n;
}