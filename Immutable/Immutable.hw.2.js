const getFiboCulculator = () => {
    const cache = [1n, 1n];

    return n => {
        while (!cache[n]) {
            console.log("calculation...");
            cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
        }
        return cache[n];
    }
}

const getFibo = getFiboCulculator();
console.log(getFibo(3));