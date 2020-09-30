module.exports = function reverse (n) {
    let reversN = Number.parseInt(n.toString().split('').reverse().join(''));
  return reversN;
}
