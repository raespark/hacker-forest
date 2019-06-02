const range = (size, startAt = 0) => {
    if (startAt !== 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }
    return [...Array(size).keys()]
}

export default {
    range
};