function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomStops(num, startWithZero, endWith100) {
    let stops = []
    let first = startWithZero ? 0 : getRandomIntInclusive(1, 40)
    stops[0] = first
    for (var i = 1; i < num; i++) {
        let next = getRandomIntInclusive(stops[i - 1], stops[i - 1] + 40)
        if (next >= 100) {
            stops[i] = 100
            break
        } else {
            stops[i] = next
        }
    }
    if(endWith100) stops[stops.length - 1] = 100
    return stops
}

function randomSlice(arr, num) {
    num = num || getRandomIntInclusive(1, arr.length)
    let start = getRandomIntInclusive(0, arr.length - 1)
    while (start + num > arr.length) {
        start--
    }
    return arr.slice(start, start + num)
}

function flatten(set) {
    let flat = []
    let ranges = set.ranges || [{
        min: set.min,
        max: set.max
    }]
    ranges.forEach(range => {
        for (let i = range.min; i <= range.max; i++) {
            flat.push(i)
        }
    })
    return flat
}

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randomPicks(arr, num) {
    num = num || getRandomIntInclusive(1, arr.length)
    let picks = []
    for (let i = 0; i < num; i++) {
        picks.push(pick(arr))
    }
    return picks
}

module.exports = {
    getRandomIntInclusive: getRandomIntInclusive,
    getRandomStops: getRandomStops,
    randomSlice: randomSlice,
    flatten: flatten,
    pick:pick,
    randomPicks:randomPicks
};
