function digitalRoot(n) {
    return n < 10 ? n : digitalRoot([...n.toString()].reduce((a, b) => a + parseInt(b), 0));
}